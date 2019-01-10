jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-call input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-call input[type=submit]").removeAttr('disabled');
			$('.form-call input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-call input[type=submit]").attr('disabled','disabled');
			$('.form-call input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
		$('.call-modal, .popup2, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.call-modal > .form-call textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-call').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-call input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal1').click(function (e){
		e.preventDefault();
		$('.call-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-call").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "call.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.call-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('call-me');
				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.call-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});