jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat12 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat12 input[type=submit]").removeAttr('disabled');
			$('.form-flat12 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat12 input[type=submit]").attr('disabled','disabled');
			$('.form-flat12 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat12-modal, .popup19, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat12-modal > .form-flat12 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat12').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat12 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal19').click(function (e){
		e.preventDefault();
		$('.flat12-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat12").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat12.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup19, .overlay').css('opacity','1');
					$('.popup19, .overlay').css('visibility','visible');
					$('.flat12-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat12');
				}
				else {
					$('.popup19 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup19, .overlay').css('opacity','1');
					$('.popup19, .overlay').css('visibility','visible');
					$('.flat12-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});