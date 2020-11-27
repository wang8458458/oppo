$(function() {
	var a = true;
	//订单展开
	$(".xiangqing").click(function() {
		if (a) {
			$(".base").css("height", "155px");
			a = false;
		} else {
			$(".base").css("height", "75px");

			a = true;
		}
	});
	
	$(".anniu a").click(function(){
		layer.msg("付款成功");
	});
});
