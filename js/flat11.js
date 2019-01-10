jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat11 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat11 input[type=submit]").removeAttr('disabled');
			$('.form-flat11 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat11 input[type=submit]").attr('disabled','disabled');
			$('.form-flat11 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat11-modal, .popup18, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat11-modal > .form-flat11 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat11').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat11 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal18').click(function (e){
		e.preventDefault();
		$('.flat11-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat11").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat11.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup18, .overlay').css('opacity','1');
					$('.popup18, .overlay').css('visibility','visible');
					$('.flat11-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat11');
				}
				else {
					$('.popup18 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup18, .overlay').css('opacity','1');
					$('.popup18, .overlay').css('visibility','visible');
					$('.flat11-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});