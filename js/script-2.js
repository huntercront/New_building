$(function(){

			    $('.menu-up').on('click', function() {
			       $('.menu-open').fadeToggle(300, function(){
			            if( $(this).css('display') === "none"){
			                $(this).removeAttr('style');
			            }
			            if($('.menu-open a').on('click', function() {
			            	$('.menu-open').removeAttr('style');
			            }));
			       });

			    });

			});



$(function(){

	//$('.open_modal1').click(
        //function(){
            //$(".form-call").on('change').find("input:checkbox").attr("checked","checked");//выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")

         //});
         //$('.open_modal1').on('click', function(){
             //$('.form-call input:checkbox').prop('checked', true);
         //})

});



	$(function(){
	  $( ".team-toggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".full-team" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	  
	      $( ".team-toggle" ).slideToggle();
	  });
	});


	$(function(){
	  $( ".privacy-policy" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".privacy-policy-modal" ).fadeToggle(); // плавно скрываем, или отображаем все элементы <div>
	  });
	});
	$(function(){
	  $( ".privacy-policy-modal" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".privacy-policy-modal" ).fadeToggle(); // плавно скрываем, или отображаем все элементы <div>
	  });
	});

function quiznextipoteka(num){//false




	var all=0;

	$('.quiz-modal2 .quizipoteka').eq(num-1).find('input').each(function(indx, element){





	

	var shouldco=$(this).val();
	   
	   if(shouldco!=""){

	all++;
		
		}
		
		
	});

		if($('.quiz-modal2 .quizipoteka').eq(num-1).find('input').length==all){
			$('.quizipoteka').hide();
		$('.quizipoteka').eq(num).show();
		
		}





		


if(num==$('.quiz-modal2').length+1){





var array_r = new Array();

var pr=0; $('.quiz-modal2 input').each(function(indx, element){
		if($(this).val()!=""){
			pr++;
		  array_r.push({name: $(this).attr('class'),  index:  $(this).val()});
		}
		});

if(pr == $('.quiz-modal2 input').length && $('.quiz-modal2 input:checked').length>0){


		$.ajax({
		  type: "POST",
		  url: "quiz-mail-2.php",
		  data: "name="+JSON.stringify(array_r, null, 2),
		  success: function(msg){
		 //   console.log( "Прибыли данные: " + msg );
		 $('.quiz-modal2').hide();
		 $('.quiz2-thanks').show();
		 yaCounter47125581.reachGoal('quiz-ipoteka');
		  }
		  
		});
}else{
	alert('одно из полей не заполнено');
	$('.quizipoteka').hide();
		$('.quizipoteka').eq(num-1).show();
}
}

}

$(function(){

			    $('.quiz-up2').on('click', function() {
			    	$('.quiz-modal2').fadeToggle(300);
			      });
			    if($('.close2-quiz, .quiz-bg').on('click', function() {
			      	$('.quiz-modal2').hide();
			      }));

			    $('.close2-thanks').on('click', function() {
			    	$('.quiz2-thanks').hide();
			    	location.reload();

			      });
			});



$('.discount2-object').click(function(){
		        $(this).find('.discount-object-content-hidden').addClass('aqua');
$('.discount-object-content-hidden:not(.aqua)').hide();
	        $(this).find('.discount-object-content-hidden').fadeToggle();
	        	        $(this).find('.discount-object-content-hidden').removeClass('aqua');
	    });




