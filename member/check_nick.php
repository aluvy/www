<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   
   // $nick = $_POST['nick'];


   if(!$nick) 
   {
      echo "
         <span class='fail'>닉네임을 입력하세요.</span>
         <script>
             $('#nick').parent().parent('dl').removeClass('success');
             $('#nick').parent().parent('dl').addClass('fail');
         </script>
      ";
   }
   else if(strpos($nick, ' ') !== false)
   {
       echo "
         <span class='fail'>공백을 포함하지 않은 닉네임을 입력하세요.</span>
         <script>
             $('#nick').parent().parent('dl').removeClass('success');
             $('#nick').parent().parent('dl').addClass('fail');
         </script>
       ";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record)
      {
       
         echo "
            <span class='fail'>다른 닉네임을 사용하세요.</span>
            <script>
                $('#nick').parent().parent('dl').removeClass('success');
                $('#nick').parent().parent('dl').addClass('fail');
            </script>
         ";
      }
      else
      {
         echo "
            <span class='success'>사용가능한 닉네입니다.</span>
            <script>
                $('#nick').parent().parent('dl').removeClass('fail');
                $('#nick').parent().parent('dl').addClass('success');
            </script>
         ";
      }
		 
      mysql_close();
   }
?>