<?
	function latest_article($table, $loop, $char_limit, $char_limit_con)	// 테이블명, 노출갯수, 글자수
	{
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');	// 한글도 1자로 처리, 제목의 총 글자 수
			$subject = $row[subject];
			$len_content = mb_strlen($row[content], 'utf-8');
			$content = $row[content];

			if ($len_subject > $char_limit)	// 제한글자수보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);
				$subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}

			if ($len_content > $char_limit_con)	// 제한글자수보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);
				$content = mb_substr($content, 0, $char_limit_con, 'utf-8');
				$content = $content."...";
			}
			
			$regist_day = substr($row[regist_day], 0, 10);	// '2022-02-21'

            
			// if($table=='concert'){
			// 	if($row[file_copied_0]){	//	첨부된 이미지가 있으면
			// 		$concertimg='./concert/data/'.$row[file_copied_0];
			// 	}else{
			// 		$concertimg= './concert/data/default.jpg';
			// 	}
			// }
            

			// if($table=='greet'){	// greet table

			// 	echo "      
			// 		<div class='col1'>
			// 			<a href='./$table/view.php?table=$table&num=$num'>
			// 				<p>$subject</p>
			// 				<p>$content</p>
			// 			</a>
			// 		</div>
			// 		<div class='col2'>$regist_day</div>
			// 		<div class='clear'></div>
			// 	";
			// }
			
			if($table=='concert'){		// concert table
				echo "      
					<li>
						<a href='./$table/view.php?table=$table&num=$num'>
							<dl>
								<dt>$subject</dt>
								<dd>
									$content
									<span>$regist_day</span>
								</dd>
							</dl>
							<div class='motion'><span></span><span></span><span></span><span></span></div>
						</a>
					</li>
				";    
			}
			
		}
		mysql_close();
	}
?>