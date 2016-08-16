
/*对角线效果*/
var $floor1_c_right=$('.floor1_c_right');
$floor1_c_right.find('a').hover(function(event){
	$(this).find('.leftline').css("display","block").stop().animate({'height':'180px'},500);
	$(this).find('.topline').css("display","block").stop().animate({'width':'270px'},500);
	$(this).find('.rightline').css("display","block").stop().animate({'top':'0px','height':'180px'},500);
	$(this).find('.bottomline').css("display","block").stop().animate({'left':'0px','width':'270px'},500);
},function(event){
	$(this).find('.leftline').stop().animate({'height':'0px'},500,function(event){$(this).css('display','none')});
	$(this).find('.topline').stop().animate({'width':'0px'},500,function(event){$(this).css('display','none')});
	$(this).find('.rightline').stop().animate({'top':'180px','height':'0px'},500,function(event){$(this).css('display','none')});
	$(this).find('.bottomline').stop().animate({'left':'270px','width':'0px'},500,function(event){$(this).css('display','none')});
});



/*对角线效果*/
/*var $dingwei=$('.dingwei');
$dingwei.hover(function(event){
	$('.leftline').stop().animate({'height':'180px'},500);
	$('.topline').stop().animate({'width':'270px'},500);
	$('.rightline').stop().animate({'top':'0px','height':'180px'},500);
	$('.bottomline').stop().animate({'left':'0px','width':'270px'},500);
},function(event){
	$('.leftline').stop().animate({'height':'0px'},500);
	$('.topline').stop().animate({'width':'0px'},500);
	$('.rightline').stop().animate({'top':'180px','height':'0px'},500);
	$('.bottomline').stop().animate({'left':'270px','width':'0px'},500);
});*/
