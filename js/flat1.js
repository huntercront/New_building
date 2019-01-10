jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat1 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat1 input[type=submit]").removeAttr('disabled');
			$('.form-flat1 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat1 input[type=submit]").attr('disabled','disabled');
			$('.form-flat1 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat1-modal, .popup8, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat1-modal > .form-flat1 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat1').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat1 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal8').click(function (e){
		e.preventDefault();
		$('.flat1-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat1").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat1.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup8, .overlay').css('opacity','1');
					$('.popup8, .overlay').css('visibility','visible');
					$('.flat1-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat1');
				}
				else {
					$('.popup8 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup8, .overlay').css('opacity','1');
					$('.popup8, .overlay').css('visibility','visible');
					$('.flat1-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});