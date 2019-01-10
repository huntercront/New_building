jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat6 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat6 input[type=submit]").removeAttr('disabled');
			$('.form-flat6 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat6 input[type=submit]").attr('disabled','disabled');
			$('.form-flat6 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat6-modal, .popup13, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat6-modal > .form-flat6 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat6').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat6 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal13').click(function (e){
		e.preventDefault();
		$('.flat6-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat6").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat6.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup13, .overlay').css('opacity','1');
					$('.popup13, .overlay').css('visibility','visible');
					$('.flat6-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat6');
				}
				else {
					$('.popup13 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup13, .overlay').css('opacity','1');
					$('.popup13, .overlay').css('visibility','visible');
					$('.flat6-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});