
/*大的轮播图（第一个轮播图）*/
var timer = 0;
var index = 0;
var $left = $("#left");
var $right = $("#right"); 
var $lunbotu = $("#lunbotu");
var $input = $(".input");
function player1(){
	timer=setInterval(function(){
		var $lunbo_imgs = $(".lunbo_imgs").find("img");
		$lunbo_imgs.fadeOut();
		index++;
		if (index==5) {
			index=0;
		}
		$lunbo_imgs.eq(index).fadeIn();
		$input.find("span").eq(index).css({"background":"#E5004F"});
		$input.find("span").eq(index).siblings().css({"background":"#211616"});
	},2000);
}
player1();

$lunbotu.hover(function(event){
		clearInterval(timer);
		$left.show();
		$right.show();
},function(event){
	player1();
	if($lunbotu.get(0).contains(event.relatedTarget)){
		clearInterval(timer);
		$left.show();
		$right.show();
	}else if(event.relatedTarget ===$("#left").get(0) ||event.relatedTarget ===$("#right").get(0)){
		clearInterval(timer);
		$left.show();
		$right.show();
	}else{
		$left.hide();
		$right.hide();
	}
});

$right.click(function(){
	$(".lunbo_imgs").find("img").eq(index).fadeOut();
	index++;
	if (index==5) {
			index=0;
		}
	$(".lunbo_imgs").find("img").eq(index).fadeIn();

	$(".input").find("span").eq(index).siblings().css({"background":"#211616"});
	$(".input").find("span").eq(index).css('background', 'rgb(229, 0, 79)')
});

$left.click(function(){
	$(".lunbo_imgs").find("img").eq(index).fadeOut();
	if (index==0) {
		index=5;
	}
	index--;
	$(".lunbo_imgs").find("img").eq(index).fadeIn();
	$(".input").find("span").eq(index).siblings().css({"background":"#211616"});
	$(".input").find("span").eq(index).css('background', 'rgb(229, 0, 79)')
});

$input.find("span").hover(function(event){
	var _index = $(event.target).index();
	index=_index;
	$(this).css({"background":"#E5004F"});
	$(this).siblings().css({"background":"#211616"});
	$(".lunbo_imgs").find("img").eq(_index).siblings().fadeOut();
	$(".lunbo_imgs").find("img").eq(_index).fadeIn();
});


/*1楼轮播*/
var time2=0;
var index2=0;
var $floorxiaoimg = $(".floorxiao").find("a");
var $floor1_c_lunbo_left = $(".floor1_c_lunbo_left");
var $floor1_c_lunbo_right = $(".floor1_c_lunbo_right");
$floor1_c_lunbo_right.click(function(){
	$floorxiaoimg.eq(index2).css({"margin-left":"-390px"});
	if(index2>0){
		$floorxiaoimg.eq(0).appendTo($(".floorxiao"));
		$floorxiaoimg.eq(0).css({"margin-left":"0px"});
		$floorxiaoimg.eq(1).appendTo($(".floorxiao"));
		$floorxiaoimg.eq(1).css({"margin-left":"0px"});
	}
	index2++;
	if(index2==2){
		index2=0;
	}
});







