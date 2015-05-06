$(document).ready(function(){
	setSize();

	$(window).resize(function(){
		setSize();
	});

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
				
			}
			if(index == 4){
				
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
});

var setSize=function(){
	var nWinHeight=$(window).height();

	$('.war').css({'height': nWinHeight});
	$('aside').css({'top': (nWinHeight-$('aside').height())/2});

	var nContentTop=$('#content').css('top');
};