jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.form-flaty input:checkbox', function() {
		if($(this).is(':checked')){
			$(".form-flaty input[type=submit]").removeAttr('disabled');
			$('.form-flaty input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".form-flaty input[type=submit]").attr('disabled','disabled');
			$('.form-flaty input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	//

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
			$('.flaty-modal, .popup4, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.flaty-modal > .form-flaty textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.form-flaty').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".form-flaty input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal8').click(function (e){
		e.preventDefault();
		$('.flaty-modal, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".form-flaty").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "flaty.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup4, .overlay').css('opacity','1');
					$('.popup4, .overlay').css('visibility','visible');
					$('.flaty-modal').css({'opacity':'0','visibility':'hidden'});
				}
				else {
					$('.popup4 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup4, .overlay').css('opacity','1');
					$('.popup4, .overlay').css('visibility','visible');
					$('.flaty-modal').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});