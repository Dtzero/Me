$(document).ready(function(){

	$_Query.ajax('GET','./port/getSkill.php',{},function(data){
		var aSkill=data.skill[0];
		for(var index in aSkill){
			var adata=aSkill[index].split('-');
			$('#war-content-skill').append('<li class="skill_list">'+
							'<div class="course">'+index+':</div>'+
							'<div style="overflow: hidden;"><div class="courses" style="background-color: '+adata[1]+';width: '+adata[0]+';">'+adata[0]+'</div></div>'+
						'</li>');
		}
		
	});

	//浏览器窗口改变，设置页面尺寸
	setSize();

	$(window).resize(function(){
		setSize();
	});

	//fullpage插件设置页面切换
	$.fn.fullpage({
		scrollingSpeed: 500,
		css3: true,
		scrollOverflow: false,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		menu: 'header,aside',
		verticalCentered: false,
		onLeave: function(index , nextIndex, direction){
			if(index == 2){
				$('#war-2-sun').fadeOut(500);
			}
			if(index == 3){
				$('#war-1-moon').animate({
					left: '-200px'
				},300);
			}
			if(index == 4){
				$('#mood-cloud').animate({
					left: '150%'
				},300);
			}
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-home').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 2){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-info').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				$('#war-2-sun').stop();
				$('#war-2-sun').fadeIn(2000);
			}
			if(index == 3){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-skill').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				
				$('#war-1-moon').animate({
					left: '200px'
				},800);
				
			}
			if(index == 4){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-mood').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				
				$('#mood-cloud').animate({
					left: 0
				},1000);
			}
			if(index == 5){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-article').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 6){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-photo').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 7){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-project').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 8){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-message').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeOut();
			}
		}
	});

	//footer部分动画循环
	setInterval(footerAnimate,1000);
});

//设置footer部分动画
var footerAnimate=function(){
	$('.message-callMe-click').animate({
		top: '5px'
	},500,function(){
		$('.message-callMe-click').animate({
			top: '0px'
		},500);
	});
};

//设置元素尺寸
var setSize=function(){
	var nWinHeight=$(window).height();

	$('.war').css({'height': nWinHeight});
	$('aside').css({'top': (nWinHeight-$('aside').height())/2});

	var nContentTop=$('#content').css('top');

	var marginTop=(nWinHeight-520)/2>100?(nWinHeight-520)/2:100;
	$('#war-content-skill').css({'margin-top':marginTop});
};