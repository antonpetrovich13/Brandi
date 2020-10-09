
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
	$('.slider').slick({
		arrows: false,
		dots:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:4000,
		pauseOnHover:true,
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
	$('.menu__item').click(function(event)
	 {
		$('.menu__item,.menu__body,.header__link').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
    $('.menu__link, .header__link').click(function(event) {
        $('.menu__item, .menu__body, .header__link').removeClass('active');
        $('body').removeClass('lock')
    });
});



// ПЛАВНАЯ НАВИГАЦИЯ
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},500);
                return false;
        });
});


$(function() {
    $('.footer__logo').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});

