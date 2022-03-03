<?
    session_start();
?>
<meta charset="UTF-8">
<?
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION); 

    /*
    $name='홍길동'
    $hp1='010'
    $hp2='1111'
    $hp3='2222'
    */

    if(!$name) {  /* !='없으면'*/
        echo("
            <script>
                window.alert('이름을 입력하세요');
                //history.go(-1);
            </script>
        ");
        exit;
    }

    if(!($hp2 && $hp3)) {
        echo("
            <script>
                window.alert('연락처를 입력하세요');
                //history.go(-1);
            </script>
        ");
        exit;
    }


    include "../../lib/dbconn.php";    // DB연결

    $sql = "select * from member where name='$name'";  //이름으로 검색
    $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

    $num_match = mysql_num_rows($result);  //1 null


    if(!$num_match) //검색 레코드가 없으면
    {
        echo(" 
            <script>
                window.alert('등록되지 않은 이름 입니다');
                //history.go(-1);
            </script>
        ");
        exit;
    }
    else    //검색 레코드가 있으면  
    {
        $hp = $hp1."-".$hp2."-".$hp3;  // 010-1111-2222 DB안에 저장된 포멧으로 변경

        $row = mysql_fetch_array($result); 
        //$row[id] ,.... $row[level]
        $sql ="select * from member where name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
     
        /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
        암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함 */

        if(!$num_match) // 이름은 있지만..전화번호가 일치하지 않으면
        {
            echo("
                <script>
                    window.alert('등록된 정보가 없습니다');
                    //history.go(-1);
                </script>
            ");

            exit;
        }
        else  // 1이면=이름과 전화번호가 모두 일치 한다면
        {
            $userid = $row[id];
            $username = $row[name];
            $userhp = $row[hp];
            $date = $row[regist_day];

            echo("
                <script>
                    $('#loadtext').fadeIn();
                    $('.loadtext_bg').fadeIn();
                </script>
                
                <p><span>{$username}</span>회원님 가입정보입니다.</p>
                <div class='notice'>
                    회원님의 아이디는 <strong> {$userid} </strong> 입니다.
                </div>
                <dl>
                    <dt>아이디</dt>
                    <dd>{$userid}</dd>
                    <dt>이름</dt>
                    <dd>{$username}</dd>
                    <dt>연락처</dt>
                    <dd>{$userhp}</dd>
                    <dt>가입일자</dt>
                    <dd>{$date}</dd>
                </dl>
                <ul>
                    <li><a href='./login_form.php'>로그인하기</a></li>
                    <li><a href='./pw_find.php'>비밀번호 찾기</a></li>
                </ul>
                <a href='#' class='close'>닫기</a>
            ");
        }
    }
?>