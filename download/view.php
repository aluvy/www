<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       

	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$file_name[0]   = $row[file_name_0];
	$file_name[1]   = $row[file_name_1];
	$file_name[2]   = $row[file_name_2];

	$file_type[0]   = $row[file_type_0];
	$file_type[1]   = $row[file_type_1];
	$file_type[2]   = $row[file_type_2];

	$file_copied[0] = $row[file_copied_0];
	$file_copied[1] = $row[file_copied_1];
	$file_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = str_replace(" ", "&nbsp;", $row[content]);
	$item_content = str_replace("\n", "<br>", $item_content);
	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
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
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
				document.location.href = href;
			}
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
                <li><a href="../product/list.php">제품검색</a></li>
                <li class="current"><a href="../download/list.php">인증서</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span>HOME</span>
                    <span>사업영역</span>
                    <span>인증서</span>
                </div>
                <h2>인증서</h2>
            </div>
			<div class="content_area">
                <div class="summary">
                    <p>시민과 미래를 향해 열려있는 포스코엠텍</p>
                    <span>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</span>
                </div>






















				<div class="file_bbs_wrap">

					<ul class="bbs_view_ttl">
						<li><?= $item_subject ?></li>
						<li>
							<span><?= $item_nick ?></span>
							<span><?= $item_date ?></span>
							<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
						</li>
						<?
							if($file_copied[0] || $file_copied[1] || $file_copied[2]){
						?>
						<li class="file">
							<strong>첨부파일</strong>
							<?
								for ($i=0; $i<3; $i++)
								{
									if ($userid && $file_copied[$i])	// 로그인, 첨부된 파일이 있으면
									{
										$show_name = $file_name[$i];
										$real_name = $file_copied[$i];
										$real_type = $file_type[$i];
										$file_path = "./data/".$real_name;	//	경로 ./data/2022_02_24_10_29_32_0.zip
										$file_size = filesize($file_path);	// 파일의 용량
						
										echo "
											<p>
												$show_name
												<small>$file_size Byte</small>
												<a href='download.php?table=$table&num=$num&real_name=$real_name&show_name=$show_name&file_type=$real_type'>저장하기</a>
											</p>
										";
									}
								}
							?>
						</li>
						<? } ?>
					</ul>
					
					<div class="bbs_view_cont">
						<?= $item_content ?>
					</div>
					
					<div class="btn_wrap">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
						
						<? if($userid && ( $userid==$item_id || $userid=='admin' || $userlevel==1) ){ ?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
						<? } ?>
					
						<? if($userid) { ?>
							<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<? } ?>
					
					</div>
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