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
				$('#main').append('<a style="background: '+ data.project[i].bg_color +'" href="#page'+ i +'" class="main-list">'+ data.project[i].name +'</a>');
				$('body').append(
					'<div id="war-'+ i +'" class="war war-'+ i +' section" style="background: '+ data.project[i].bg_color +'">'+
						'<div class="page_main">'+
							'<div class="info info_word">'+ data.project[i].name +'</div>'+
							'<div class="info info_img" style="background: '+ data.project[i].bg_image +'; background-size: 100%;"></div>'+
						'</div>'+
					'</div>');
			}
		}
	});
	var page=['page'];
	var len=document.getElementsByClassName('war').length-1;
	for(var i=0; i<len; i++){
		page.push('page'+i);
	}
	// alert(page);
	
	//fullpage插件设置页面切换
	$.fn.fullpage({
		scrollingSpeed: 500,
		css3: true,
		scrollOverflow: false,
		anchors: page,
		menu: 'header,#back',
		verticalCentered: false,
		afterLoad: function(anchorLink, index){
			if(anchorLink == 'page'){
				//alert('ss');
				$('#back').animate({
					'right': '-40px'
				});	
			}else{
				$('#back').animate({
					'right': '0px'
				});
			}
		}
	});
});