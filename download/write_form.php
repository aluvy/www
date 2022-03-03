<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	if ($mode=="modify")
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
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
	<title>사업영역 - 인증서</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub2/common/css/sub2common.css">
    <link rel="stylesheet" href="./css/download.css">
	<script src="https://kit.fontawesome.com/cdd59ed73b.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>
	<script>
		function check_input()
		{
			if (!document.board_form.subject.value)
			{
				alert("제목을 입력하세요1");    
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value)
			{
				alert("내용을 입력하세요!");    
				document.board_form.content.focus();
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

















				<div class="file_bbs_wrap">
					<? if($mode=="modify") { ?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } else { ?>
					
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
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" name="subject" id="subject" value="<?=$item_subject?>" ></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<textarea id="contents" name="content"><?=$item_content?></textarea>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile0">첨부파일1</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile0">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_0) { ?>
										<div class="delete_ok">
											<?=$item_file_0?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file0" value="0">
												<label for="del_file0">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile1">첨부파일2</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile1">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_1) { ?>
										<div class="delete_ok">
											<?=$item_file_1?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file1" value="1">
												<label for="del_file1">삭제</label>
											</div>
										</div>
										<div class="clear"></div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="upfile2">첨부파일3</label></dt>
									<dd>
										<input type="file" name="upfile[]" id="upfile2">
										<!-- * 5MB까지 업로드 가능! -->
										<? if ($mode=="modify" && $item_file_2) { ?>
										<div class="delete_ok">
											<?=$item_file_2?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" name="del_file[]" id="del_file2" value="2">
												<label for="del_file2">삭제</label>
											</div>
										</div>
										<div class="clear"></div>
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
	<?
		if (!$liststyle){
			$liststyle = 'list';	// 리스트 스타일
			echo "
				<script>
					$('.lst_style li').removeClass('active');
					$('.lst_style li:eq(0)').addClass('active');
				</script>
			";
		} else if($liststyle == 'box'){
			$liststyle = 'box';	// 리스트 스타일
			echo "
				<script>
					$('.lst_style li').removeClass('active');
					$('.lst_style li:eq(1)').addClass('active');
					$('.bbs_lst').addClass('box');
				</script>
			";

		}
	?>

</body>
</html>
