jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat15 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat15 input[type=submit]").removeAttr('disabled');
			$('.form-flat15 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat15 input[type=submit]").attr('disabled','disabled');
			$('.form-flat15 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat15-modal, .popup22, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat15-modal > .form-flat15 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat15').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat15 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal22').click(function (e){
		e.preventDefault();
		$('.flat15-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat15").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat15.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup22, .overlay').css('opacity','1');
					$('.popup22, .overlay').css('visibility','visible');
					$('.flat15-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat13');
				}
				else {
					$('.popup22 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup22, .overlay').css('opacity','1');
					$('.popup22, .overlay').css('visibility','visible');
					$('.flat15-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});