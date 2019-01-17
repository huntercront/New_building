<?php
//проверяем значения полученые при проверке скриптом формы
if (trim($_POST['valTrFal'])!='valTrFal_true') {
	echo 'fasle';
}
else {

		$name = trim($_POST['name']);

		$NameValue = trim($_POST['name_class_value']);

		//$txtemail = trim($_POST['txtemail']);

		$phone = trim($_POST['phone']);
		//$country = trim($_POST['country']);

		//$txtmessage = trim($_POST['txtmessage']);

		// от кого
		$fromMail = 'info@sovinvest.pro';
		$fromName = 'sovinvest.pro';

		// Сюда введите Ваш email
		$emailTo = 'cront20097@gmail.com';

		$subject = 'Заказ автобусного тура';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта Новостройки Тверь\n\nИмя: $name\nТелефон: $phone";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
}
?>