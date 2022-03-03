<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    // 새글쓰기 =>  $table=concert
	// 수정하기 => $table, $num, $page, $mode


	include "../lib/dbconn.php";

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
	<title>고객지원 - 뉴스룸</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub2/common/css/sub2common.css">
    <link rel="stylesheet" href="./css/product.css">
    <script src="../common/js/prefixfree.min.js"></script>
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
	<? include '../common/sub_header.html' ?>
	<!-- <div class="sub_layout"></div> -->

	<div class="visual">
            <img src="../sub6/common/images/visual.jpg" alt="서브 비주얼 이미지 - 사업영역">
            <h3>사업영역</h3>
        </div>
        <div class="sub_menu">
            <ul>
                <li><a href="../sub2/sub2_1.html">철강부원료</a></li>
                <li><a href="../sub2/sub2_2.html">포장엔지니어링</a></li>
                <li class="current"><a href="../product/list.php">제품검색</a></li>
                <li><a href="../download/list.php">인증서</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span>HOME</span>
                    <span>사업영역</span>
                    <span>제품검색</span>
                </div>
                <h2>제품검색</h2>
            </div>
			<div class="content_area">
                <div class="summary">
                    <p>포스코엠텍의 제품/기술을 검색해보세요</p>
                    <span>포스코엠텍은 철강 부원료인 알루미늄 탈산제(잉곳, 펠렛, 미니펠렛)을 직접 생산합니다.</span>
                </div>


















				<div class="photo_bbs_wrap">

					<? if($mode=="modify"){	// 수정하기 => insert.php 에 mode=modify와 num을 넘겨준다?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data">

					<? } else {	// 새 글쓰기 ?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } ?>


						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
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
	<? include '../common/sub_footer.html' ?>

</body>
</html>