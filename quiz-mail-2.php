<?

$a=$_POST['name'];




$flowers = array( 
array("fio", "Имя:"),
array("tel", "Телефон:"),
array("email", "Email:"),
array("first-cash", "Первоначальный взнос:"),
array("cost-object", "Примерная стоимость объекта:")

                ); 


$b = json_decode($a);
$name=$b[0]->fio;
$phone=$b[0]->tel;

$pams="";

for($i=0;$i<count($b);$i++){
	
	
	for($x=0;$x<count($flowers);$x++){
		

	
	if($flowers[$x][0]==$b[$i]->name){
		$asdsx=$b[$i]->index;
		$pams.=$flowers[$x][1].' '.$asdsx."<br>";
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
$subject = "Заполнение формы 'получить ипотеку'";


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







