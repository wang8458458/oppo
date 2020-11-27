$(function() {
	//Find X 系列

	$(".header-nav .header-link li:first-child").hover(function() {
		$(".header-phone").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-phone").on("mouseenter", function() {
			$(".header-phone").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-phone").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-phone").css("display", "none");
		$(".header").removeClass("toggle");
	});
	//Reno 系列
	$(".header-nav .header-link li:nth-child(2)").hover(function() {
		$(".header-voice").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-voice").on("mouseenter", function() {
			$(".header-voice").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-voice").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-voice").css("display", "none");
		$(".header").removeClass("toggle");
	});
	//Ace系列
	$(".header-nav .header-link li:nth-child(3)").hover(function() {
		$(".header-parts").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-parts").on("mouseenter", function() {
			$(".header-parts").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-parts").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-parts").css("display", "none");
		$(".header").removeClass("toggle");
	});
	//K / A系列
	$(".header-nav .header-link li:nth-child(4)").hover(function() {
		$(".header-life").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-life").on("mouseenter", function() {
			$(".header-life").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-life").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-life").css("display", "none");
		$(".header").removeClass("toggle");
	});
	//智能硬件
	$(".header-nav .header-link li:nth-child(5)").hover(function() {
		console.log("1")
		$(".header-zhineng").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-zhineng").on("mouseenter", function() {
			$(".header-zhineng").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-zhineng").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-zhineng").css("display", "none");
		$(".header").removeClass("toggle");
	});
	//隐藏选项
	$(".hide .hidden ul li").hover(function() {
		$(this).siblings().children(".touming").stop(true, true).fadeIn(0);
		$(this).siblings().find("span").stop(true, true).css("color", "#999999");
	}, function() {
		$(this).siblings().children(".touming").stop(true, true).fadeOut(0);
		$(this).siblings().find("span").stop(true, true).css("color", "#333");
	});
	$(".header-user").hover(function() {
		$(".menu-select").css("display", "block");
	}, function(e) {
		$(".menu-select").css("display", "none");
	});
})
