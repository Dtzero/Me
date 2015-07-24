(function(){

})();

$(document).ready(function(){

	$.ajax({
		url: './port/message.json',
		type: 'get',
		async: false,
		dataType: 'json',
		success: function(data){
			for(var i in data.project){
				$('body').append('<div id="war-'+ i +'" class="war war-'+ i +' section"></div>');
			}
		}
	});
	
	//fullpage插件设置页面切换
	$.fn.fullpage({
		scrollingSpeed: 500,
		css3: true,
		scrollOverflow: false,
		//anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		verticalCentered: false
	});
});