<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$name    = $_POST['name'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$company = $_POST['company'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "info@wsysind.com";
$mail_subject = "New Website Contact Form Message";

$body  = "You received a new message from website:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Company: $company\n";
$body .= "Subject: $subject\n";
$body .= "Message:\n$message\n";

$headers  = "From: Western Systems Website <info@wsysind.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

mail($to, $mail_subject, $body, $headers);

header("Location: thankyou.html");
exit();
}
?>
