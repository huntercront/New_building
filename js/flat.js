jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat input[type=submit]").removeAttr('disabled');
			$('.form-flat input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat input[type=submit]").attr('disabled','disabled');
			$('.form-flat input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat-modal, .popup4, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat-modal > .form-flat textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal4').click(function (e){
		e.preventDefault();
		$('.flat-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup4, .overlay').css('opacity','1');
					$('.popup4, .overlay').css('visibility','visible');
					$('.flat-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flats');
				}
				else {
					$('.popup4 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup4, .overlay').css('opacity','1');
					$('.popup4, .overlay').css('visibility','visible');
					$('.flat-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});