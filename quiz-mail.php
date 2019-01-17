<?

$a=$_POST['name'];
$flowers = array( array("life", "Цель: Для жизни"),
array("invest", "Цель: Для инвестиции"),
array("old-build", "Тип жилья: Стандарт"),
array("new-build", "Тип жилья: Комфорт"),
array("business", "Тип жилья: Бизнес"),
array("lux", "Тип жилья: Элитное"),
array("studia", "Тип квартиры: Студия"),
array("1k", "Тип квартиры: 1к квартиры"),
array("2k", "Тип квартиры: 2к квартиры"),
array("3k", "Тип квартиры: 3к квартиры"),
array("4k", "Тип квартиры: 4к квартиры"),
array("4plus", "Тип квартиры: 4+к квартиры"),
array("2mln", "Цена: До 2 млн. руб"),
array("4mln", "Цена: От 2 до 4 млн. руб"),
array("5mln", "Цена: От 4 и более млн. руб"),
array("rough", "Отделка квартиры: Черновая"),
array("finish", "Отделка квартиры: Чистовая"),
array("full", "Отделка квартиры: Под ключ"),
array("flat-make", "Срок сдачи квартиры: Дом сдан"),
array("this-year", "Срок сдачи квартиры: 2018 год"),
array("next-year", "Срок сдачи квартиры: 2019 год"),
array("next-next-year", "Срок сдачи квартиры: 2020 год"),
array("2next-next-year", "Срок сдачи квартиры: 2021 год"),
array("3next-next-year", "Срок сдачи квартиры: 2022 год"),
array("school", "Предпочтения: Наличие школы"),
array("childhome", "Предпочтения Наличие детского сада"),
array("mall", "Предпочтения: Рядом ТЦ"),
array("parking", "Предпочтения: Наличие парковки"),
array("sportbuild", "Предпочтения: Наличие спорткомплекса"),
array("metro", "Предпочтения: Рядом остановка"),
array("cash", "Форма оплаты: Наличные"),
array("ipoteka", "Форма оплаты: Ипотека"),
array("credit", "Форма оплаты: Рассрочка")
                ); 


$b = json_decode($a);
$name=$b[0]->fio;
$phone=$b[0]->tel;

$pams="";

for($i=1;$i<count($b);$i++){
	
	
	for($x=0;$x<count($flowers);$x++){
		

	
	if($flowers[$x][0]==$b[$i]->name){
		
		$pams.=$flowers[$x][1]."<br>";
		break;
	}
	}
}


	$body = "Получено письмо с сайта sovinvest.pro<br>
Имя: $name<br>
Телефон: $phone<br>
$pams<br>";
	$to = "cront20097@gmail.com"; 
// емайл получателя 
 // не забываем запятую. Даже в последнем контакте лишней не будет
// Для начинающих! $to .= точка в этом случае для Дописывания в переменную 
// содержание письма
$subject = "Прохождение основного теста по выбору недвижимости в Твери";
// устанавливаем тип сообщения Content-type, если хотим
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";

// дополнительные данные
$headers .= "From: Quiz <".$to.">\r\n"; // от кого
$headers .= 'Cc: '.$to . "\r\n"; // копия сообщения на этот адрес
$headers .= "Bcc: ".$to."\r\n"; // скрытая копия сообщения на этот
if(mail($to, $subject, $body, $headers)){
print("true");
}else{
print("false");
}
?>







