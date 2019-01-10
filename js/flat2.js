jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat2 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat2 input[type=submit]").removeAttr('disabled');
			$('.form-flat2 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat2 input[type=submit]").attr('disabled','disabled');
			$('.form-flat2 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat2-modal, .popup9, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat2-modal > .form-flat2 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat2').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat2 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal9').click(function (e){
		e.preventDefault();
		$('.flat2-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat2").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat2.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup9, .overlay').css('opacity','1');
					$('.popup9, .overlay').css('visibility','visible');
					$('.flat2-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat2');
				}
				else {
					$('.popup9 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup9, .overlay').css('opacity','1');
					$('.popup9, .overlay').css('visibility','visible');
					$('.flat2-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});