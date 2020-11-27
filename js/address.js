$(function() {
	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	//弹窗
	$(".box .add ").click(function() {
		layer.open({
			type: 1,
			title: "添加收货地址",
			closeBtn: 1,
			shadeClose: true,
			shade: 0.5,
			area: ['600px', '350px'],
			content: $(".form"),
			zIndex: 1
		});
	})
	//添加地址
	$('.form').Validform({
		tiptype: 3,
		//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
		beforeSubmit: function(curform) {
			layer.closeAll();
			//console.log(111)
			var name = $(".name").val()
			var phone = $("#phone").val();
			var province = $("#province").val()
			var city = $("#city").val()
			var area = $("#area").val()
			var add = $(".add-01").val();
			console.log(province, city, area, phone)
			var $li = $('<li class="item active""><div class="item_box">' + name +
				'</div><div class="new_phone">' + phone + '</div></div><div class="new-address"><span class="province">' +
				province + '</span><span class="province">' + city + '</span><span class="province">' + area +
				'</span></div><div class="family">' + add +
				'</div><div class="pic"><img src="img/personal/a.png" class="edit" width="20px"><img src="img/personal/b.png" class="del" width="20px"></div></li>'
			)
			$('.new_address').prepend($li);
			$(".input").val("")
			return false;
			$(".btn").show()
			$("#preserve").hide()
		},
	})
	//编辑地址
	$('.new_address').on('click', '.edit', function() {
		$("#preserve").removeClass("hide")
		$("#btn").addClass("hide")
		//console.log("1")
		//console.log($(this).parent('.add_item').index())
		layer.open({
			type: 1,
			title: '编辑地址',
			closeBtn: 1,
			area: ['600px', '350px'],
			shadeClose: true,
			shade: 0.5,
			content: $('.form'),
			zIndex: -1
		});
		var name = $(".name").val()
		var phone = $("#phone").val();
		var province = $("#province").val()
		var city = $("#city").val()
		var area = $("#area").val()
		var add = $(".add-01").val();
		$(".name").val($(this).parent().siblings(".item_box").text())
		$(".phone").val($(this).parent().siblings(".new_phone").text())
		$(".add-01").val($(this).parent().siblings(".family").text())
		// 赋值省市区
		new PCAS("province3", "city3", "area3", $("#province").val(), $("#city").val(), $("#area").text());
		console.log($("#province").val())

	})

	//弹窗关闭
	$(".form .cancel ").click(function() {
		layer.closeAll()
	})
	//删除地址
	$('.new_address').on('click', '.del', function() {
		var $self = $(this)
		layer.confirm("确定删除地址？",
			function() {
				$self.parents('.item').remove();
				layer.msg("删除成功")
			},
			function() {
				layer.msg("取消成功")
			})
	})


})









