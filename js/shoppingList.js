$(function() {

	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	//回到顶部
	$(window).scroll(function() {
		if ($(document).scrollTop() < 300) {
			$(".phone .anniu").stop().fadeOut(1000);
		} else {
			$(".anniu").stop().fadeIn(1000);
		};
	});
	$(".phone .anniu").click(function() {
		// 回到顶部
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	$(".num_box").hover(function() {
		$(this).children(".price").css("display", "block");
	}, function() {
		$(this).children(".price").css("display", "none");
	})


	//高
	$('.high').click(function() {
		let $item = $('.d1').toArray();
		$item.sort(function(itemA, itemB) {
			var ageA = $(itemA).find('.rmb').text();
			var ageB = $(itemB).find('.rmb').text();
			return ageB - ageA;
		});

		//将排序之后的数组插入tbody
		$('.shop .phone').append($item);
	});
	//低
	$('.low').click(function() {
		let $item = $('.d1').toArray();
		$item.sort(function(itemA, itemB) {
			var ageA = $(itemA).find('.rmb').text();
			var ageB = $(itemB).find('.rmb').text();
			return ageA - ageB;
		});

		//将排序之后的数组插入tbody
		$('.shop .phone').append($item);
	});

})
