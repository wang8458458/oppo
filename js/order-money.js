$(function() {
	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	var starttime = new Date("2021/09/14");
	setInterval(function() {
		var nowtime = new Date();
		var time = starttime - nowtime;
		// var day = parseInt(time / 1000 / 60 / 60 / 24);
		var minute = parseInt((time / 1800 / 60 % 60));
		var seconds = parseInt(time / 1800 % 60);
		$('.time').html("还剩" + minute + "分钟" + seconds + "秒" + "自动取消");
	}, 1000);



	$(".choose li").click(function() {
		//console.log("1")
		var flag = $(this).hasClass("blue")
		$(".choose li").removeClass("blue")
		if (flag) {
			$(this).removeClass("blue")
		} else {
			$(this).addClass("blue")

		}
	})
	$(".pay-price ul li").click(function() {
		//console.log("1")
		var flag = $(this).hasClass("black")
		$(".pay-price ul li").removeClass("black")
		if (flag) {
			$(this).removeClass("black")
		} else {
			$(this).addClass("black")

		}
	})


})
