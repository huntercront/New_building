jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat7 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat7 input[type=submit]").removeAttr('disabled');
			$('.form-flat7 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat7 input[type=submit]").attr('disabled','disabled');
			$('.form-flat7 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat7-modal, .popup14, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat7-modal > .form-flat7 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat7').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat7 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal14').click(function (e){
		e.preventDefault();
		$('.flat7-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat7").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat7.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup14, .overlay').css('opacity','1');
					$('.popup14, .overlay').css('visibility','visible');
					$('.flat7-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat7');
				}
				else {
					$('.popup14 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup14, .overlay').css('opacity','1');
					$('.popup14, .overlay').css('visibility','visible');
					$('.flat7-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});