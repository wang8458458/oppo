$(function() {
	$(".header-all").load("header.html")
	//轮播图
	var swiper = new Swiper(".swiper-container", {

		loop: true,
		autoplay: true,
		// effect: 'fade',
		autoplay: {
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
	});
	//选项卡1
	$('.tab .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		//获取最后一个li的价格
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.picture').find('li').hide().eq(i).show();
		if (i == 3) {
			$(".tab .little_box3").text("￥4299");
		} else {
			$(".tab .little_box3").text("￥3799");
		}
	});

	//选项卡2
	$('.tab_first .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pic').find('li').hide().eq(i).show();

	});
	//选项卡3
	$('.tab_second .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pict').find('li').hide().eq(i).show();
		if (i == 0) {
			$(".tab_second .little_box3").text("￥3799");
		} else {
			if (i == 1) {
				$(".tab_second .little_box3").text("￥4799");
			} else {
				$(".tab_second .little_box3").text("￥4199");
			}

		}
	});
	//选项卡4
	$('.OPPO .oppo-01 .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pict').find('li').hide().eq(i).show();
	});
	//选项卡5
	$('.OPPO .oppo-02 .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pict').find('li').hide().eq(i).show();
		// if (i == 1) {
		// 	$(".OPPO .oppo-02 h4").text("￥12999");
		// } else {
		// 	$(".OPPO .oppo-02 h4").text("￥5999");
		// }
	});
	$('.OPPO .oppo-03 .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pict').find('li').hide().eq(i).show();
	});
	$('.OPPO .oppo-04 .circle li').click(function() {
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.pict').find('li').hide().eq(i).show();
	});

	$('.intellect .right   li').hover(function() {
		console.log("1")
		// 获取索引值
		var i = $(this).index();
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parents().siblings('.bottom').find('ul li').hide().eq(i).show();


	});
	$(".footer-all").load("footer.html")
})
