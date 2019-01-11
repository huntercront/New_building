$(document).ready(function () {
	$('.autoplay').slick({
	slidesToShow: 5,
	centerMode: true,
	dots: true,
	edgeFriction: 0.5,
	centerPadding: '5px',
  slidesToScroll: 1,
  autoplay: true,
	autoplaySpeed: 5500,
	responsive: [
	{
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
				slidesToShow: 3,
				dots: true,
      }
		},
	{
      breakpoint: 979,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
        slidesToShow: 3
      }
		},
    {
      breakpoint: 768,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
        slidesToShow: 3
      }
		},
		{
		breakpoint: 666,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
        slidesToShow: 1
			}
		}
  ]
});
});
	$(document).ready(function () {
	$('.main-slider').slick({
	slidesToShow: 1,
	centerMode: true,
	dots: true,
	edgeFriction: 0.5,
	centerPadding: '5px',
  slidesToScroll: 1,
  autoplay: true,
	autoplaySpeed: 55000,
	responsive: [
	{
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
				dots: true,
      }
		},
	{
      breakpoint: 979,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
      }
		},
    {
      breakpoint: 768,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
      }
		},
		{
		breakpoint: 666,
      settings: {
        arrows: false,
				centerMode: true,
				dots: true,
			}
		}
  ]
});
});