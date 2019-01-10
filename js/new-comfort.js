jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-comfort input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-comfort input[type=submit]").removeAttr('disabled');
			$('.form-comfort input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-comfort input[type=submit]").attr('disabled','disabled');
			$('.form-comfort input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.comfort-modal, .popup6, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.comfort-modal > .form-comfort textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-comfort').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-comfort input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal6').click(function (e){
		e.preventDefault();
		$('.comfort-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-comfort").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "new-comfort.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup6, .overlay').css('opacity','1');
					$('.popup6, .overlay').css('visibility','visible');
					$('.comfort-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('comfort');
				}
				else {
					$('.popup6 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup6, .overlay').css('opacity','1');
					$('.popup6, .overlay').css('visibility','visible');
					$('.comfort-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});