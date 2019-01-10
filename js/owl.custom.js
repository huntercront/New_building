$(document).ready(function(){
  $(".slide-one").owlCarousel({
		loop: true,
        rewind: false,
		margin: 0, //Отступ от картино если выводите больше 1
		nav: true, //Отключил навигацию
		dots: true,
		items: 1,
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 3000, //Время движения слайда
		autoplayTimeout: 5000, //Время смены слайда

	});
  $(".slide-two").owlCarousel({
		loop: false, //Зацикливаем слайдер
		rewind: false,
		margin: 0, //Отступ от картино если выводите больше 1
		nav: true, //Отключил навигацию
		dots: true,
		items: 5,
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 2000, //Время смены слайда
	});
  $(".slide-three").owlCarousel({
		loop: false, //Зацикливаем слайдер
		rewind: false,
		margin: 0, //Отступ от картино если выводите больше 1
		nav: true, //Отключил навигацию
		dots: true,
		items: 5,
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 2000, //Время смены слайда
	});
});

function trigger_carousel_nav(numb,u){
if(u){
 $('.slide-one').trigger('to.owl.carousel', numb);
}
for(var i=0;i<=numb;i++){
$('.profit-nav .profit-nav-dot').eq(i).css('border-top','solid 2px #3155aa');
}

for(var i=numb+1;i<$('.profit-nav .profit-nav-dot').length;i++){
$('.profit-nav .profit-nav-dot').eq(i).css('border-top','solid 2px #eaeaea');
}

}

$('.profit-nav .profit-nav-dot').each(function(ind){
$(this).click(function(){
trigger_carousel_nav(ind, true);
});
});
var owl=$(".slide-one");
owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
trigger_carousel_nav(current,false);
});