jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat10 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat10 input[type=submit]").removeAttr('disabled');
			$('.form-flat10 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat10 input[type=submit]").attr('disabled','disabled');
			$('.form-flat10 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat10-modal, .popup17, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat10-modal > .form-flat10 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat10').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat10 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal17').click(function (e){
		e.preventDefault();
		$('.flat10-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat10").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat10.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup17, .overlay').css('opacity','1');
					$('.popup17, .overlay').css('visibility','visible');
					$('.flat10-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat10');
				}
				else {
					$('.popup17 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup17, .overlay').css('opacity','1');
					$('.popup17, .overlay').css('visibility','visible');
					$('.flat10-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});