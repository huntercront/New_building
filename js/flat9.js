jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat9 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat9 input[type=submit]").removeAttr('disabled');
			$('.form-flat9 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat9 input[type=submit]").attr('disabled','disabled');
			$('.form-flat9 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat9-modal, .popup16, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat9-modal > .form-flat9 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat9').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat9 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal16').click(function (e){
		e.preventDefault();
		$('.flat9-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat9").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat9.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup16, .overlay').css('opacity','1');
					$('.popup16, .overlay').css('visibility','visible');
					$('.flat9-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat9');
				}
				else {
					$('.popup16 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup16, .overlay').css('opacity','1');
					$('.popup16, .overlay').css('visibility','visible');
					$('.flat9-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});