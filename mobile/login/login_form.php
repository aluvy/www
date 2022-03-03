<?
	session_start();
	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>로그인</title>
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="./css/login_common.css">
    <link rel="stylesheet" href="./css/login.css">
    <script src="https://kit.fontawesome.com/cdd59ed73b.js" crossorigin="anonymous"></script>

    <script src="../js/prefixfree.min.js"></script>
    <script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/jquery-migrate-1.4.1.min.js"></script>

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
		<h2>Members Login</h2>
		<p class="summary">아래 아이디와 비밀번호를 입력하세요.</p>

		<div class="login_wrap">

			<form  name="member_form" method="post" action="login.php">
				<ul>
					<li>
						<label for="id" class="hidden">아이디</label>
						<input type="text" name="id" id="id" placeholder="아이디를 입력하세요">
					</li>
					<li>
						<label for="pass" class="hidden">비밀번호</label>
						<input type="password" name="pass" id="pass" placeholder="비밀번호를 입력하세요">
					</li>
				</ul>
				<button type="submit"><span>로그인</span></button>
			</form>

			<ul class="find_link">
				<li><a href="./id_find.php">아이디 찾기</a></li>
				<li><a href="./pw_find.php">비밀번호 찾기</a></li>
			</ul>

			<div class="join_link">
				아이디가 없으신 분은 회원가입을 해주세요
				<a href="../member/member_check.html">회원가입</a>
			</div>
		</div>
	</article>


</body>
</html>