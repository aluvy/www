<? 
	session_start();
    
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 - 가입완료</title>
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="./css/member_common.css">
    <link rel="stylesheet" href="./css/member_form.css">
    <script src="https://kit.fontawesome.com/cdd59ed73b.js" crossorigin="anonymous"></script>

    <script src="../js/prefixfree.min.js"></script>
    <script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/jquery-migrate-1.4.1.min.js"></script>
    <!-- <script src="./js/member_check.js"></script> -->
</head>
<body>


    <header>
        <ul class="topmenu">
            <li><a href="javascript:history.go(-1);"><i class="fa-solid fa-arrow-left"><i>뒤로</i></i></a></li>
            <li><a href="../index.html"><i class="fa-solid fa-house-chimney"><i>메인으로</i></i></a></li>
        </ul>
        <h1 class="hidden"><a href="../index.html">POSCO M-TECH LOGO</a></h1>
    </header>


    <article id="content">
        <h2>Members Join</h2>
        <ul class="step_tab">
            <li>약관동의</li>
            <li>정보입력</li>
            <li class="active">가입완료</li>
        </ul>

        <div class="join_ok_wrap">
            
            <p>
                <strong>POSCO M-TECH</strong><br>
                회원가입이 완료되었습니다. 감사합니다.
            </p>
            
            <div>
                <a href="../login/login_form.php">로그인하기</a>
                <a href="../index.html">메인으로</a>
            </div>

        </div>
                
	</article>
</body>
</html>