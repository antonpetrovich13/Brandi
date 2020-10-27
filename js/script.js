
// ФУНКЦИЯ IBG
function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();

// СЛАЙДЕР
$(document).ready(function(){
	$('.features__slider').slick({
		arrows: false,
		speed:800,
		dots:true,
		slidesToShow:3,
		slidesToScroll: 3,
		adaptiveHeight:true,
		touchThreshold:20,
		responsive:[
		{
			breakpoint:1140,
				settings:{
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},{
				breakpoint:770,
					settings:{
						slidesToShow:1,
						slidesToScroll: 1,
					}
			}
		]
	});
});


// ФИЛЬТР
$('.filter__link').click(function(event) {
	var i=$(this).data('filter');
	if (i==1) {
		$('.works__column').show(0);
	}else{
		$('.works__column').hide(0);
		$('.works__column.f_'+i).show(0);
	}
	$('.filter__link').removeClass('active');
	$(this).addClass('active');
	return false;
});

// СЛАЙДЕР
$(document).ready(function(){
	$('.team__slider').slick({
		arrows: false,
		speed:800,
		dots:true,
		slidesToShow:4,
		slidesToScroll: 4,
		adaptiveHeight:true,
		touchThreshold:20,
		responsive:[
		{
			breakpoint:1160,
				settings:{
					slidesToShow:3,
					slidesToScroll: 3,
				}
			},{
			breakpoint:890,
				settings:{
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},{
			breakpoint:600,
				settings:{
					slidesToShow:1,
					slidesToScroll: 1,
				}
			}
		]
	});
});

// АНИМАЦИЯ ПРИ СКРОЛЛЕ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// МЕНЮ-БУРГЕР
$(document).ready(function() {
	$('.header__burger').click(function(event)
	 {
		$('.header__burger,.header__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
    $('.header__link').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});


// ПЛАВНАЯ НАВИГАЦИЯ
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                var fixed_offset = 50;
                $("html, body").animate({scrollTop: $(_href).offset().top- fixed_offset },500);
                return false;
        });
});


$(function() {
    $('.footer__logo').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});

// АНИМАЦИЯ ПРИ СКРОЛЛЕ ДЛЯ HEADER
$(document).scroll(function(e) {
    $(window).scrollTop() > 500 ? $('.header').addClass('header__color') : $('.header').removeClass('header__color');
});

// ПАРАЛАКС
$(window).scroll(function(event){
		var s=0-$(this).scrollTop()/2;
	$('.mainscreen').css('transform', 'translate3d(0, '+s+'px, 0)');
});
