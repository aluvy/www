<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'aluvy_@naver.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "POSCO M-TECH 사이트에서 발송된 문의사항 입니다. Form:  $name";
$email_body = "POSCO M-TECH 사이트에서 발송된 문의사항입니다.\n\n\n---------------\n"."Here are the details:\n이름: $name\n이메일: $email_address\n연락처: $phone\n---------------\n\nMessage:\n$message";
$headers = "From: webmaster@master.com\n"; // 보낸사람
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;
?>