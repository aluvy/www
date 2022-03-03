<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	$table = "download";
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
</head>
<?
	include "../lib/dbconn.php";

	if (!$scale)
    $scale=8;			// 한 화면에 표시되는 글 수

	if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
					window.alert('검색할 단어를 입력해 주세요!');
					history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0){
		$total_page = floor($total_record/$scale);      
	} else {
		$total_page = floor($total_record/$scale) + 1;
	}

	if (!$page){                 // 페이지번호($page)가 0 일 때
		$page = 1;
	}              // 페이지 번호를 1로 초기화

	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
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

					<div class="bbs_sort">
						<div class="total">총 <b><?= $total_record ?></b> 개의 게시물이 있습니다.</div>

						<select class="scale" name="scale" onchange="location.href='list.php?scale='+this.value+'&liststyle=<?=$liststyle?>'">
							<option value=''><?=$scale?>개씩</option>
							<option value='4'>4개씩</option>
							<option value='8'>8개씩</option>
							<option value='10'>10개씩</option>
							<option value='12'>12개씩</option>
						</select>

						<ul class="lst_style">
							<li class="active"><a href="list.php?liststyle=list&scale=<?=$scale?>">목록형</a></li>
							<li><a href="list.php?liststyle=box&scale=<?=$scale?>">박스형</a></li>
						</ul>

					</div>
					
					
					<div class="bbs_lst">
						<ul class="lst_ttl">
							<li class="lst_width1">번호</li>
							<li class="lst_width2">제목</li>
							<li class="lst_width3">다운로드</li>
							<!-- <li class="lst_width3">글쓴이</li> -->
							<li class="lst_width4">등록일</li>
							<!-- <li class="lst_width5">조회</li> -->
						</ul>
						
						<ul class="lst_cont">
							<?		
								for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
								{
									mysql_data_seek($result, $i);       
									// 가져올 레코드로 위치(포인터) 이동  
									$row = mysql_fetch_array($result);       
									// 하나의 레코드 가져오기
									
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
									$item_date = substr($item_date, 0, 10);
						
									$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
							?>
							<li>
								<div class="lst_width1"><?= $number ?></div>
								<div class="lst_width2">
                                    
                                    <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">
                                        <p>
                                            <?= $item_subject ?>
                                            <?
                                                if ($file_copied[0] || $file_copied[1] || $file_copied[3])	// 첨부된 파일이 있으면
                                                {
                                                    echo '<i class="fa-solid fa-paperclip"><i>파일</i></i>';
                                                }
                                            ?>
                                        </p>
                                    </a>
								</div>
                                <div class="lst_width3">
                                    <?
                                        if ($file_copied[0])	// 로그인, 첨부된 파일이 있으면
                                        {
                                            $show_name = $file_name[0];
                                            $real_name = $file_copied[0];
                                            $real_type = $file_type[0];
                                            $file_path = "./data/".$real_name;	//	경로 ./data/2022_02_24_10_29_32_0.zip
                                            $file_size = filesize($file_path);	// 파일의 용량
                            
                                            echo "
                                                <a href='download.php?table=$table&num=$num&real_name=$real_name&show_name=$show_name&file_type=$real_type' class='download'>
                                                    <i class='fa-solid fa-cloud-arrow-down'><i>다운로드</i></i>
                                                    파일 다운로드
                                                </a>
                                            ";
                                        }
                                    ?>
                                </div>
								<!-- <div class="lst_width3"><?= $item_nick ?></div> -->
								<div class="lst_width4"><?= $item_date ?></div>
								<!-- <div class="lst_width5"><?= $item_hit ?></div> -->
							</li>
							<?
									$number--;
								}
							?>
						</ul>
					</div>



					<div class="page_num">
						<span class="prev">이전</span>
						<?
							// 게시판 목록 하단에 페이지 링크 번호 출력
							for ($i=1; $i<=$total_page; $i++)
							{
								if ($page == $i)     // 현재 페이지 번호 링크 안함
								{
									echo "<span class='active'>{$i}</span>";
								}
								else
								{ 
									if($mode=="search")	// 검색리스트일 때 (page, scale, mode, find, search)
									{
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle&mode=search&find=$find&search=$search'>{$i}</a></span>";
									}
									else
									{    // 일반 리스트일 때
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle'>{$i}</a></span>";
									}
								}      
							}
						?>			
						<span class="next">다음</span>
					</div>

					<div class="btn_wrap">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
						<? if($userid){	// 로그인 했을 경우 ?>
						<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<? } ?>
					</div>
					

					<div class="bbs_search">
						<form name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search&liststyle=<?=$liststyle?>"> 
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>별명</option>
								<option value='name'>이름</option>
							</select>
							<label class="hidden" for="search"></label>
							<input type="text" name="search" id="search" placeholder="검색어를 입력하세요">
							<button type="submit">검색</button>
						</form>
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