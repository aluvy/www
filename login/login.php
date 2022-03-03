<?
    session_start();
    @extract($_GET);
    @extract($_POST);
    @extract($_SESSION);
?>
<meta charset="utf-8">

<?
    // 이전화면에서 이름이 입력되지 않았으면 "이름을 입력하세요"
    // 메시지 출력
    // $id=>입력id값    $pass=>입력 pass
   

    if(!$id) // id가 입력되지 않았으면
    {   
        echo("
            <script>
                window.alert('아이디를 입력하세요.');
                history.go(-1);
            </script>
        ");
        exit;
    }

    if(!$pass) // pass가 입력되지 않았으면
    {
        echo("
            <script>
                window.alert('비밀번호를 입력하세요.');
                history.go(-1);
            </script>
        ");
        exit;
    }

 
    include "../lib/dbconn.php";    // DB연결

    $sql = "select * from member where id='$id'";   //id 검색 sql문
    $result = mysql_query($sql, $connect);

    $num_match = mysql_num_rows($result);  // 검색되면 1, 없으면 0

    if(!$num_match) // 검색되지 않았으면
    {
        echo("
            <script>
                window.alert('등록되지 않은 아이디입니다.');
                history.go(-1);
            </script>
        ");
    }
    else    // 해당 아이디가 검색되었으면
    {
        $row = mysql_fetch_array($result);
        //$row[id] ,.... $row[level]
        $sql ="select * from member where id='$id' and pass=password('$pass')"; // id와 password를 찾는 sql문 (pass는 암호화한 값으로 찾아야한다)
        $result = mysql_query($sql, $connect);
        $num_match = mysql_num_rows($result);   // 검색되면 1, 없으면 0
    
  

        if(!$num_match)  //적은 패스워드와 디비 패스워드가 같지않을때
        {
            echo("
                <script>
                    window.alert('비밀번호가 틀립니다.');
                    history.go(-1);
                </script>
            ");

           exit;
        }
        else    // 입력 pass 와 테이블에 저장된 pass 일치한다.
        {
            $userid = $row[id];
            $username = $row[name];
            $usernick = $row[nick];
            $userlevel = $row[level];
  
            //세션변수에 id~level 값을 저장한다(로그인상태)
            $_SESSION['userid'] = $userid;//$_SESSION['userid'] = $row[id];
            $_SESSION['username'] = $username;//$_SESSION['username'] = $row[name];
            $_SESSION['usernick'] = $usernick;//$_SESSION['usernick'] = $row[nick];
            $_SESSION['userlevel'] = $userlevel;//$_SESSION['userlevel'] = $row[level];

            echo("
                <script>
                    alert('{$userid}님 로그인이 되었습니다.');
                    location.href = '../index.html';
                </script>
            ");
        }
    }
?>
