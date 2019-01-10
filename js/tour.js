jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-tour input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-tour input[type=submit]").removeAttr('disabled');
			$('.form-tour input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-tour input[type=submit]").attr('disabled','disabled');
			$('.form-tour input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.tour-modal, .popup5, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.tour-modal > .form-tour textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-tour').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-tour input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal5').click(function (e){
		e.preventDefault();
		$('.tour-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-tour").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "tour.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup5, .overlay').css('opacity','1');
					$('.popup5, .overlay').css('visibility','visible');
					$('.tour-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('tour');
				}
				else {
					$('.popup5 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup5, .overlay').css('opacity','1');
					$('.popup5, .overlay').css('visibility','visible');
					$('.tour-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});