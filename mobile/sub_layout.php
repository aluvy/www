<?
    $myurl = $_SERVER['PHP_SELF'];

    if(strpos($myurl, 'sub1_')) {
        $visual = 1;
        $ttl = '회사소개';
?>
<div class="visual" style="background-image:url(./images/sub_visual<?=$visual?>.jpg)"><h3><?=$ttl?></h3></div>
<div class="sub_menu">
    <span><a href="#"><?=$pagettl?></a></span>
    <ul>
        <li><a href="./sub1_1.html">포스코엠텍 소개</a></li>
        <li><a href="./sub1_2.html">CEO 인사말</a></li>
        <li><a href="./sub1_3.html">주요연혁</a></li>
        <li><a href="./sub1_4.html">찾아오시는 길</a></li>
    </ul>
</div>


<?
    } else if(strpos($myurl, 'sub2_')){
        $visual = 2;
        $ttl = '사업영역';
    ?>
<div class="visual" style="background-image:url(./images/sub_visual<?=$visual?>.jpg)"><h3><?=$ttl?></h3></div>
<div class="sub_menu">
    <span><a href="#"><?=$pagettl?></a></span>
    <ul>
        <li><a href="./sub2_1.html">철강부원료</a></li>
        <li><a href="./sub2_2.html">포장엔지니어링</a></li>
        <li><a href="./product/list.php">제품검색</a></li>
    </ul>
</div>


<?
    } else if(strpos($myurl, 'product')){
        $visual = 2;
        $ttl = '사업영역';
    ?>
<div class="visual" style="background-image:url(../images/sub_visual<?=$visual?>.jpg)"><h3><?=$ttl?></h3></div>
<div class="sub_menu">
    <span><a href="#"><?=$pagettl?></a></span>
    <ul>
        <li><a href="../sub2_1.html">철강부원료</a></li>
        <li><a href="../sub2_2.html">포장엔지니어링</a></li>
        <li><a href="../product/list.php">제품검색</a></li>
    </ul>
</div>


<?
    } else if(strpos($myurl, 'sub3_')){
        $visual = 3;
        $ttl = '지속가능경영';
    ?>
<div class="visual" style="background-image:url(./images/sub_visual<?=$visual?>.jpg)"><h3><?=$ttl?></h3></div>
<div class="sub_menu">
    <span><a href="#"><?=$pagettl?></a></span>
    <ul>
        <li><a href="./sub3_1.html">윤리경영</a></li>
        <li><a href="./sub3_2.html">사회공헌</a></li>
    </ul>
</div>


<?
    } else if(strpos($myurl, 'sub4_')){
        $visual = 4;
        $ttl = '고객지원';
    ?>
<div class="visual" style="background-image:url(./images/sub_visual<?=$visual?>.jpg)"><h3><?=$ttl?></h3></div>
<div class="sub_menu">
    <span><a href="#"><?=$pagettl?></a></span>
    <ul>
        <li><a href="./sub4_1.html">미디어센터</a></li>
        <li><a href="./sub4_2.html">FAQ</a></li>
    </ul>
</div>


<? } ?>


