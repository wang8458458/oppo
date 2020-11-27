$(function() {

	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	$(".Reno4 .rig .serve").click(function() {
		$(".Reno4 .rig .fuwu1").show();
	})
	//轮播
	var swiper = new Swiper('.Reno4 .rig .shopping .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 15,
		slidesPerGroup: 4,
		loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
		loopFillGroupWithBlank: true,
	});
	//手机选项卡
	$('.tab .title li').click(function() {
		var i = $(this).index();
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		//对应内容切换
		$(this).parent().siblings('.content').find('li').hide().eq(i).show();
	});
	//数量的加减
	$(".number-select .num-plus").click(function() {
		console.log("1")
		var number = $(".number-select input").val();
		//console.log(number)
		var tol = 0;
		if (number < 5) {
			number++;
			$(".number-select input").val(number);
			$(".number-select .num-minus").removeClass("disabled");
		}
		if (number == 5) {
			$(this).addClass("disabled");
		}
	});
	$(".number-select .num-minus").click(function() {

		var number = $(".number-select input").val();
		var tol = 0;
		if (number > 1) {
			number--;
			$(".number-select input").val(number);
			$(".number-select .num-plus").removeClass("disabled");
		}
		if (number == 1) {
			$(this).addClass("disabled");
		}
	});

	//颜色的选择
	$(".rig .color_01 a .btn").click(function() {
		//console.log("1")
		var flag = $(this).hasClass("blue")
		$(".color .btn").removeClass("blue")
		if (flag) {
			$(this).removeClass("blue")
		} else {
			$(this).addClass("blue")

		}
	})

	//配置的选择
	$(".rig .dispose a .btn").click(function() {
		//console.log("1")
		var flag = $(this).hasClass("red")
		$(".dispose .btn").removeClass("red")
		if (flag) {
			$(this).siblings().removeClass("red")
		} else {
			$(this).addClass("red")

		}
	})
	//服务
	$(".rig .serve a .btn").click(function() {
		console.log("1")
		var flag = $(this).hasClass("pink")
		$(".serve .btn").removeClass("pink")
		if (flag) {
			$(this).removeClass("pink")
		} else {
			$(this).addClass("pink")

		}
	})

	//花呗选择
	$(".rig .tokio1 a .btn").click(function() {
		console.log("1")
		var flag = $(this).hasClass("blank")
		$(".tokio1 .btn").removeClass("blank")
		if (flag) {
			$(this).removeClass("blank")
		} else {
			$(this).addClass("blank")

		}
	})

	//价钱的切换
	$('.rig .dispose a').click(function() {
		// 获取索引值
		var i = $(this).index();
		//console.log(i)
		//获取最后一个li的价格
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parent().siblings('.picture').find('li').hide().eq(i).show();
		if (i == 0) {
			$(".rig .price_01").text("￥3799.00");
		} else {
			$(".rig .price_01").text("￥4299.00");
		}
	});
	//图标的出现以及回到顶部

	//添加商品
	$(".Reno4 .rig .add a .add_shop").click(function() {
		layer.msg("添加成功");
		setTimeout(function() {
			location.href = "shoppingCart.html";
		}, 1000);
	});

	$(".Reno4 .rig .add a .add_shop").click(function() {
		//获取商品的数据
		//var name = $(this).siblings(".title").text().trim()
		var photo = $(this).parents().siblings(".gift_box").find(".phone-pic").attr("src")
		//var price = $(this).siblings(".price").text().trim();
		var id = $(this).parents().eq(2).data('id')
		var price = $(this).parents().siblings(".price_01").text().trim()
		var color = $(this).parents().siblings(".color_01").find(".blue").text().trim();
		var dispose = $(this).parents().siblings(".dispose").find(".red").text().trim();
		var number = $(this).parents().siblings(".number-select").find("#shuliang").val();
		//console.log(name, price, color, dispose, number, photo)

		var goods = {
			id: id,
			photo: photo,
			price: price,
			color: color,
			dispose: dispose,
			number: parseInt(number),

		}
		console.log(goods)
		//1.提取cookie中购物车数组
		var cart = getCookie('cart')
		if (cart) {
			//2.JSON转化成数组
			cart = JSON.parse(cart)

		} else {
			cart = [];
		}
		var i = cart.findIndex(function(item, index) { return item.id == id; });
		if (i >= 0) {
			//数量+1；
			var a = $(".number-select").find("#shuliang").val();
			
			//console.log(a);	
			cart[i].number = (+cart[i].number) + (+number);
			//console.log(cart.number);
		} else {
			cart.push(goods);
		}
		//2. JSON转化成数组

		//3.加入cookie到购物车

		//4.转化成JSON
		cart = JSON.stringify(cart)
		//5.存储到cookie
		setCookie("cart", cart)
	});


})
$(window).scroll(function() {
	//console.log($(document).scrollTop());
	if ($(document).scrollTop() > 0) {
		$(".Reno4 .tab").addClass("xinde");
		$(".Reno4 .tab").removeClass("xinde1");
	}
	if ($(document).scrollTop() > 870) {
		$(".Reno4 .tab").removeClass("xinde");
		$(".Reno4 .tab").addClass("xinde1");
	}
	$(window).scroll(function() {
		if ($(document).scrollTop() < 910) {
			$(".little_btn ").stop().hide();

		} else {
			$(".little_btn ").stop().show();
		};
	});
	//console.log($(".little_btn"));
	$(".little_btn .anniu").click(function() {
		// 回到顶部
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

});
