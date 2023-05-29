$(function () {
	$(".slide").slick({
		slidesToShow: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});

$(function () {
	$("button").click(function () {
		if ($(this).hasClass("filter-active")) {
			$(this).removeClass("filter-active");
		} else {
			$("button").removeClass("filter-active");
			$(this).addClass("filter-active");
		}
	});
});
