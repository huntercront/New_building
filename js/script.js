


	$(function(){
	  $( ".team-toggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".full-team" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	  
	      $( ".team-toggle" ).slideToggle();
	  });
	});


	function quiznext(num){

		$('.quiz').hide();

		$('.quiz').eq(num).show();




		if(num==$('.quiz').length-1){


		var array_r = new Array();
		$('.quiz input').each(function(indx, element){
		if($(this).val()!=""){


		  array_r.push({name: $(this).attr('id'),  index:  $(this).val()});
		}
		});

		$.ajax({
		  type: "POST",
		  url: "quiz_main.php",
		  data: "name="+JSON.stringify(array_r, null, 2),
		  success: function(msg){
		 //   console.log( "Прибыли данные: " + msg );
		  }
		});

		}
	}

		$(function(){

			    $('.quiz-up').on('click', function() {
			    	$('.quiz-modal').fadeToggle(300);
			      });
			    if($('.close-quiz, .quiz-bg').on('click', function() {
			      	$('.quiz-modal').hide();
			      }));

			    $('.close-thanks').on('click', function() {
			    	$('.quiz-thanks').hide();
			    	location.reload();

			      });
			});

	function quiznext(num,lr){//false 



	if(lr==undefined){

	var all=0;

	$('.quiz').eq(num-1).find('.quiz-step-block').each(function(indx, element){





	var counts = $(this).length;

	var shouldco=$(this).find('.checkbox-quiz:checked, .radio:checked:not(#check-it)').length;
	
	   
	   if(shouldco>0){

			all++;
		
		}
	});

		if($('.quiz').eq(num-1).find('.quiz-step-block').length==all){
			$('.quiz').hide();
		$('.quiz').eq(num).show();
		
		}
		
		
		
		
		}
		
		else{
		$('.quiz').hide();
		$('.quiz').eq(num).show();

		}

if(num==$('.quiz').length){

		if($('.quiz-send .name').val()!="" && $('.quiz-send .phone').val()!=""  && $('.confidential #check-it:checked').length>0){


		var array_r = new Array();


		 array_r.push({fio: $('.quiz-send .name').val(),  tel:  $('.quiz-send .phone').val()});

				$('.checkbox-quiz:checked, .radio:checked:not(#check-it)').each(function(indx, element){
				if($(this).val()!=""){
				  array_r.push({name: $(this).attr('id'),  index:  $(this).val()});
				}
				});


	


		$.ajax({
		  type: "POST",
		  url: "quiz-mail.php",
		  data: "name="+JSON.stringify(array_r, null, 2),
		  success: function(msg){
		 //   console.log( "Прибыли данные: " + msg );
		 $('.quiz-modal').hide();
		 $('.quiz-thanks').show();
		 yaCounter47125581.reachGoal('quiz-main');
		  }
		  
		});

		}else{

		$('.quiz').eq(num-1).show();
			
		}

	}
}








