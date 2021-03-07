/** @format */

//  Custom Javascript for carousel

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		smartSpeed: 1500,
		autoplayHoverPause: true,
	});
});

// Achievement section on scroll number counter
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
	if (isScrolledIntoView($('.numbers')) && !viewed) {
		viewed = true;
		$('.value').each(function () {
			$(this)
				.prop('Counter', 0)
				.animate(
					{
						Counter: $(this).text(),
					},
					{
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						},
					},
				);
		});
	}
}
