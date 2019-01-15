jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat14 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat14 input[type=submit]").removeAttr('disabled');
			$('.form-flat14 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat14 input[type=submit]").attr('disabled','disabled');
			$('.form-flat14 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat14-modal, .popup21, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat14-modal > .form-flat14 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat14').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat14 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal21').click(function (e){
		e.preventDefault();
		$('.flat14-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat14").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat14.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup21, .overlay').css('opacity','1');
					$('.popup21, .overlay').css('visibility','visible');
					$('.flat14-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat13');
				}
				else {
					$('.popup21 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup21, .overlay').css('opacity','1');
					$('.popup21, .overlay').css('visibility','visible');
					$('.flat14-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});