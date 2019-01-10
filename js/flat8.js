jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat8 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat8 input[type=submit]").removeAttr('disabled');
			$('.form-flat8 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat8 input[type=submit]").attr('disabled','disabled');
			$('.form-flat8 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat8-modal, .popup15, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat8-modal > .form-flat8 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat8').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat8 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal15').click(function (e){
		e.preventDefault();
		$('.flat8-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat8").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat8.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup15, .overlay').css('opacity','1');
					$('.popup15, .overlay').css('visibility','visible');
					$('.flat8-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat8');
				}
				else {
					$('.popup15 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup15, .overlay').css('opacity','1');
					$('.popup15, .overlay').css('visibility','visible');
					$('.flat8-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});