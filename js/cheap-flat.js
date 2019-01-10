jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-cheap input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-cheap input[type=submit]").removeAttr('disabled');
			$('.form-cheap input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-cheap input[type=submit]").attr('disabled','disabled');
			$('.form-cheap input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.cheap-modal, .popup7, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.cheap-modal > .form-cheap textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-cheap').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-cheap input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal7').click(function (e){
		e.preventDefault();
		$('.cheap-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-cheap").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "cheap-flat.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup7, .overlay').css('opacity','1');
					$('.popup7, .overlay').css('visibility','visible');
					$('.cheap-modal').css({'opacity':'0','visibility':'hidden'});
					yaCounter47125581.reachGoal('cheap');
				}
				else {
					$('.popup7 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup7, .overlay').css('opacity','1');
					$('.popup7, .overlay').css('visibility','visible');
					$('.cheap-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});