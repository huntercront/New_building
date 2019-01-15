jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat13 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat13 input[type=submit]").removeAttr('disabled');
			$('.form-flat13 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat13 input[type=submit]").attr('disabled','disabled');
			$('.form-flat13 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat13-modal, .popup20, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat13-modal > .form-flat13 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat13').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat13 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal20').click(function (e){
		e.preventDefault();
		$('.flat13-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat13").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat13.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup20, .overlay').css('opacity','1');
					$('.popup20, .overlay').css('visibility','visible');
					$('.flat13-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat13');
				}
				else {
					$('.popup20 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup20, .overlay').css('opacity','1');
					$('.popup20, .overlay').css('visibility','visible');
					$('.flat13-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});