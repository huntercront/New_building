jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat4 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat4 input[type=submit]").removeAttr('disabled');
			$('.form-flat4 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat4 input[type=submit]").attr('disabled','disabled');
			$('.form-flat4 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat4-modal, .popup11, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat4-modal > .form-flat4 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat4').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat4 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal11').click(function (e){
		e.preventDefault();
		$('.flat4-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat4").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat4.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup11, .overlay').css('opacity','1');
					$('.popup11, .overlay').css('visibility','visible');
					$('.flat4-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat4');
				}
				else {
					$('.popup11 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup11, .overlay').css('opacity','1');
					$('.popup11, .overlay').css('visibility','visible');
					$('.flat4-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});