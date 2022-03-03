<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    // 새글쓰기 =>  $table=concert
	// 수정하기 => $table, $num, $page, $mode


	include "../../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_category_1  = $row[category_1];
		$item_category_2  = $row[category_2];
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>사업영역 - 제품검색</title>
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub_common.css">
    <!-- <link rel="stylesheet" href="../sub2/common/css/sub2common.css"> -->
    <link rel="stylesheet" href="./css/product.css">
	<script src="https://kit.fontawesome.com/cdd59ed73b.js" crossorigin="anonymous"></script>
    <script src="../js/prefixfree.min.js"></script>
	<script>
		function check_input()
		{
			if (!document.board_form.subject.value)
			{
				alert("제목을 입력하세요!");    
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value)
			{
				alert("내용을 입력하세요!");    
				document.board_form.content.focus();
				return;
			}

			if (!document.board_form.category_1.value)
			{
				alert("카테고리를 선택하세요!");    
				document.board_form.category_1.focus();
				return;
			}

			if (!document.board_form.category_2.value)
			{
				alert("카테고리를 입력하세요!");    
				document.board_form.category_2.focus();
				return;
			}

			document.board_form.submit();
		}
	</script>
</head>
<body>
    <div id="skipNav">
        <a href="#content">본문바로가기</a>
        <a href="#gnb">네비게이션바로가기</a>
    </div>
 
    <div class="wrap">
        <h1 class="hidden"></h1>
        <!-- <header id="headerArea"><? //include "../header.html" ?></header> -->
        <!-- <div class="sub_layout"><? //$pagettl = "제품검색"; include "../sub_layout.php"; ?></div> -->
        <!-- <div class="sub_layout"></div> -->
        <article id="content">
            <!-- <div class="title_area"></div> -->
            <div class="content_area">


            

                <div class="bbs_write_head">
                    <ul class="topmenu">
                        <li><a href="javascript:history.go(-1);"><i class="fa-solid fa-arrow-left"><i>뒤로</i></i></a></li>
                        <!-- <li><a href="../index.html"><i class="fa-solid fa-house-chimney"><i>메인으로</i></i></a></li> -->
                    </ul>
                    <h1 class="hidden"><a href="../index.html">POSCO M-TECH LOGO</a></h1>

                    <? if($mode=="modify"){ ?>
                    <h2>수정하기</h2>
                    <? } else { ?>
                    <h2>글쓰기</h2>
                    <? } ?>
                </div>


				<div class="photo_bbs_wrap">

					<? if($mode=="modify"){	// 수정하기 => insert.php 에 mode=modify와 num을 넘겨준다?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data">

					<? } else {	// 새 글쓰기 ?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } ?>


						<ul class="bbs_write_top">
							<li>
								<dl class="nickname">
									<dt><label for="nickname">닉네임</label></dt>
									<dd><input type="text" id="nickname" value="<?=$usernick?>" readonly></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label>카테고리</label></dt>
									<dd>
										<select name="category_1">
											<?
												if($item_category_1 == '철강부원료') {
													echo "
														<option value='철강부원료' selected>철강부원료</option>
														<option value='포장엔지니어링'>포장엔지니어링</option>
													";
												} else if($item_category_1 == '포장엔지니어링'){
													echo "
														<option value='철강부원료'>철강부원료</option>
														<option value='포장엔지니어링' selected>포장엔지니어링</option>
													";
												} else {
													echo "
														<option value=''>선택하세요</option>
														<option value='철강부원료'>철강부원료</option>
														<option value='포장엔지니어링'>포장엔지니어링</option>
													";
												}
											?>
										</select>
										<label for="category_2" class="hidden">카테고리2</label>
										<input type="text" name="category_2" id="category_2" value="<?=$item_category_2?>" placeholder="두번째 카테고리를 입력하세요">
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd>
										<input type="text" name="subject" id="subject" value="<?=$item_subject?>" >
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<? if( $userid && ($mode != "modify") ) {   // 새글쓰기 에서만 HTML 쓰기가 보인다 ?>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<? } ?>
										<div>
											<textarea name="content" id="contents"><?=$item_content?></textarea>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file1">이미지파일1</label></dt>
									<dd>
										<input type="file" id="file1" name="upfile[]">

										<? if ($mode=="modify" && $item_file_0){	// 수정하기 및 0번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_0?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file1" name="del_file[]" value="0">
												<label for="del_file1">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file2">이미지파일2</label></dt>
									<dd>
										<input type="file" id="file2" name="upfile[]">
										
										<? if ($mode=="modify" && $item_file_1) {	// 수정하기 및 1번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_1?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file2" name="del_file[]" value="1">
												<label for="del_file2">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file3">이미지파일3</label></dt>
									<dd>
										<input type="file" id="file3" name="upfile[]">
										
										<? if ($mode=="modify" && $item_file_2){	// 수정하기 및 2번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_2?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file3" name="del_file[]" value="2">
												<label for="del_file3">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<a href="#" onclick="check_input()" class='active'>완료</a>
						</div>

					</form>
				</div>
















            </div>
        </article>
    <footer id="footerArea"><? include "../footer.html" ?></footer>
    </div>

    <script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/subnavi.js"></script>
</body>
</html>