$(function() {
	//映入头部尾部
	$(".header-all").load("header.html")
	$(".footer-all").load("footer.html")
	//
	$('.personal .lef li').click(function() {
		//console.log("1")
		// 获取索引值
		var i = $(this).index();
		//console.log(i)
		// 标题切换active
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		// 对应内容切换
		$(this).parents().siblings('.rig').find('li').hide().eq(i).show();
	});
	$('.collect .item').on('click', '.del', function() {
		var $self = $(this)
		layer.confirm("确定取消收藏吗？",
			function() {
				$self.parents('.item').remove();
				layer.msg("取消成功")
			},
			function() {
				layer.msg("取消失败")
			})
	})













})
