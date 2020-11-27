$(function() {
	//密码验证码的切换
	$(".form .menu  a ").click(function() {
		$(".form .menu  a ").css("font-weight", "normal")
		$(this).css("font-weight", "bold")
		//console.log("1")
		var idx = $(this).index();
		//console.log(idx)
		// 如果索引等于0
		if (idx == 0) {
			// 第一个显示,第二个隐藏
			$(".password").show().css("display", "block");
			$(".code").hide();
		} else {
			$(".password").hide();
			$(".code").show().css("display", "block");
		}
	});
	//切换二维码
	$(".pic .picture ").click(function() {
		var flag = $('.pict').is(':visible');
		console.log(flag)
		if (flag == false) {
			$('.pict').show();
			$(".hide_head").hide();
		} else {
			$('.pict').hide();
			$(".hide_head").show();
		}
	});

	//密码登录
	$("#login").click(function() {
		var phone = $("#phone").val();

		var password = $("#password").val();
		//console.log(phone, code,password)
		var reg1 = /1[345678]\d{9}/;
		var result1 = reg1.test(phone);
		//密码
		var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
		var result3 = reg3.test(password);
		var name = localStorage.getItem("username");
		var password1 = localStorage.getItem("password");
		console.log(name, password1)

		if (phone == name && password == password1) {
			
			layer.msg("登录成功")
			setTimeout(function() {
				location.href = "index.html";
			}, 1000);
		} else if (phone != name && password == password1) {
			layer.msg("使用注册的手机号登录")
			$("#phone").val("")
		} else if (phone == name && password != password1) {
			layer.msg("使用注册的密码登录")
			$("#password").val("")
		} else {
			layer.msg("手机号密码输入有误")
			$("#phone").val("")
			$("#password").val("")
		}
	});
})
