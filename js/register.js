$(function() {
	// 协议 按钮disabled
	$('.checked input').click(function() {
		//获取复选框的状态
		var isChecked = $(this).prop('checked');
		console.log(isChecked);
		$('#register').prop('disabled', !isChecked);
		//默认账户
		$("#register").click(function() {
			//获取input输入的手机号
			var phone = $("#phone").val();
			//获取input输入的验证码
			var code = $("#code").val();
			//获取input输入的密码
			var password = $("#password").val();
			//console.log(zhanghao, code, password);
			//手机号，验证码，密码的正则
			var reg1 = /1[345678]\d{9}/;
			var result1 = reg1.test(phone);
			// 密码(长度至少3位)。
			var reg2 = /^\d{6}$/;
			var result2 = reg2.test(code);
			var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
			var result3 = reg3.test(password);
			//验证是否正确
			if (result1 && result2 && result3) {
				layer.msg('注册成功');
				localStorage.setItem("username", phone);
				localStorage.setItem("password", password);
				setTimeout(function() {
					location.href = "login.html";
				}, 1000);
			} else if (!result1 && result3) {
				layer.msg('输入正确手机号');
				$("#phone").val(" ")
			} else if (!result3 && result1) {
				$("#password").val("")
				layer.msg('密码错误');
			} else if (!result2 && result1) {
				$("#code").val("")
				layer.msg('验证码错误');
			}
		})
	});

})
