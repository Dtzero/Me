$(document).ready(function(){

	$_Query.ajax('GET','./port/message.json',{},function(data){
		$('#loveword').text(data.motto);
		$('#info-email').text(data.email);
		$('#info-work').text(data.work);

		var aPractice=data.practice;
		for(var prac in aPractice){
			$('#practice-content').append('<a class="logo-link" target="_blank" href="'+aPractice[prac].link+'"><div id="logo-'+prac+'" class="company-logo"></div></a>');
			$('#logo-'+prac).css({'background': aPractice[prac].logo});
		}

		var aSkill=data.skill[0];
		var hidden='';
		for(var index in aSkill){
			var adata=aSkill[index].split('-');
			$('#war-content-skill').append('<li class="skill_list">'+
							'<div class="course">'+index+':</div>'+
							'<div style="overflow: hidden;"><div id="'+index+'" class="courses" style="background-color: '+adata[1]+';width: 0;">'+adata[0]+'</div></div>'+
						'</li>');
			hidden+=index+':'+adata[0]+',';
		}
		$('#hidden').addClass(hidden);
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
				$('#info-photo').fadeOut(200,function(){
					$('#info-name').fadeOut(200,function(){
						$('#info-love').animate({width: '0'},200,function(){
							$('#loveword').fadeOut(200,function(){
								$('#info-email').fadeOut(200,function(){
									$('#info-work').fadeOut(200);
								});
							});
						});
					});
				});
			}
			if(index == 3){
				$('#war-1-moon').animate({
					right: '-200px'
				},300);
				$('.courses').animate({width: 0},300);
			}
			if(index == 4){
				$('#practice-cloud').animate({
					left: '150%'
				},300);
				$('.company-logo').fadeOut(200);
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
				$('#info-photo').fadeIn(500,function(){
					$('#info-name').fadeIn(500,function(){
						$('#info-love').animate({width: '100%'},500,function(){
							$('#loveword').fadeIn(500,function(){
								$('#info-email').fadeIn(500,function(){
									$('#info-work').fadeIn(500);
								});
							});
						});
					});
				});
			}
			if(index == 3){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-skill').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				
				$('#war-1-moon').animate({
					right: '200px'
				},800);
				var hiddenData=$('#hidden').attr('class').split(',');
				for(var i=0; i<hiddenData.length-1; i++){
					var skillName=hiddenData[i].split(':')[0];
					var skillNumber=hiddenData[i].split(':')[1];
					$('#'+skillName).animate({width: skillNumber},800);
					//alert(skillName+','+skillNumber);
				}
			}
			if(index == 4){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-practice').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				
				$('#practice-cloud').animate({
					left: 0
				},1000);
				$('.company-logo').fadeIn(2000);
			}
			if(index == 5){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-project').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 6){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-education').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 7){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-hobby').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 8){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-more').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
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
	$('#war-content-skill,#info-content').css({'margin-top':marginTop});
	$('#practice-content').css({'padding-top':marginTop});
};