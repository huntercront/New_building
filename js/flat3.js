jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat3 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat3 input[type=submit]").removeAttr('disabled');
			$('.form-flat3 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat3 input[type=submit]").attr('disabled','disabled');
			$('.form-flat3 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat3-modal, .popup10, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat3-modal > .form-flat3 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat3').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat3 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal10').click(function (e){
		e.preventDefault();
		$('.flat3-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat3").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat3.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup10, .overlay').css('opacity','1');
					$('.popup10, .overlay').css('visibility','visible');
					$('.flat3-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat3');
				}
				else {
					$('.popup10 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup10, .overlay').css('opacity','1');
					$('.popup10, .overlay').css('visibility','visible');
					$('.flat3-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});