jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flat5 input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flat5 input[type=submit]").removeAttr('disabled');
			$('.form-flat5 input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flat5 input[type=submit]").attr('disabled','disabled');
			$('.form-flat5 input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flat5-modal, .popup12, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flat5-modal > .form-flat5 textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flat5').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flat5 input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal12').click(function (e){
		e.preventDefault();
		$('.flat5-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flat5").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flat5.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup12, .overlay').css('opacity','1');
					$('.popup12, .overlay').css('visibility','visible');
					$('.flat5-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('flat5');
				}
				else {
					$('.popup12 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup12, .overlay').css('opacity','1');
					$('.popup12, .overlay').css('visibility','visible');
					$('.flat5-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});