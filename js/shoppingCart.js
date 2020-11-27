$(function() {
	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	//全选框
	$(".tab").on('click', '#chkAll', function() {
		var ischeck = $(this).prop("checked");
		$("input[name=price]").prop("checked", ischeck)
		number();
	})

	$(".tab").on('click', 'input[name=price]', function() {
		var total = $("input[name=price]").length
		var checked = $("input[name=price]:checked").length
		$("#chkAll").prop("checked", total == checked)
		number();
	})
	//结算
	var sum1 = 0;

	function number() {
		var sum = 0
		$(".tr").each(function() {
			var num1 = $(this).find(".liang").text()
			var price = $(this).find(".price-one").text()
			var check = $(this).find(".input").prop("checked")
			if (check) {
				sum1 = num1 * price;
				sum += sum1;
			}
		})
		$(".proceed strong .price1").text("￥" + sum);
	}
	$('.tab').on('click', '.del', function() {
		var $self = $(this)
		layer.confirm("确定删除此商品？",
			function() {

				$self.parents("tr").remove();
				layer.msg("删除成功")
				number()
			},
			function() {
				layer.msg("取消成功")
			})
	})
	//加减
	$('.tab').on('click', '.jia', function() {
		var num = parseFloat($(this).siblings('.liang').text());
		//var Sum = num + 1
		$(this).siblings('.liang').text(num)
		if (num < 5) {
			num++;
			$(this).siblings('.liang').text(num)
			$(".tab .jia").removeClass("disabled");
		}
		if (num == 5) {
			$(this).addClass("disabled");
		}
		number()
	})
	$('.tab').on('click', '.jian', function() {
		var num1 = parseFloat($(this).siblings('.liang').text());
		if (num1 > 1) {
			num1--
			$(this).siblings('.liang').text(num1);
			$(".tab .jian").removeClass("disabled");
		}
		if (num1 == 1) {
			$(this).addClass("disabled");
		}
		number();
	})
})
$(document).ready(function() {
	//1.页面加载完成，获得cookie中的cart数据
	var cart = getCookie('cart');
	//console.log(cart);
	if (cart) {
		cart = JSON.parse(cart)
	} else {
		cart = []
	}
	//2.渲染数据
	//console.log(cart)
	cart.forEach(function(item, index) {
		var $item = $('<tr class="tr">' +
			'<td class="checked-one"><input type="checkbox" name="price" class="input"/></td>' +
			'<td><img src="' + item.photo + '" width="90px" height="90px"></td>' +
			'<td><span>Reno4 5G</span><span>' + item.color + '</span><span>' + item.dispose + '</span></td>' +
			'<td class="price-one">' + item.price.slice(1) + '</td>' +
			'<td class="number"><div class="box"><div class="xbox clearfix"><button type="button" class="jian disabled">-</button><div class="liang">' +
			item.number + '</div><button type="button" class="jia">+</button></div></div></td>' +
			'<td><img src="./img/personal/b.png" class="del"></td></tr>')

		$('tbody').append($item);

	});
})
