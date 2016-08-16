
/*详情页的Tab切换*/
var $xiangqing_left_ul = $(".xiangqing_left_ul");
var $number = $(".number"); 
$xiangqing_left_ul.find("li").click(function(event){
	event.preventDefault();
	var indexnum = $(this).index();
	$number.eq(indexnum).css({"display":"block"});/*"position":"absolute","top":"0px"*/
	$number.eq(indexnum).siblings().css("display","none");
});

/*dangq_top>1000时，在顶部出现*/
var $xq_head = $(".xq_head");
$(document).scroll(function(event){
	event.preventDefault();
	var dangq_top = $(this).scrollTop();
	if (dangq_top>1000) {
		$xq_head.css({"position":"fixed","top":"0px","z-Index":10001,"background-color":"#999","height":"30px"})
		$xq_head.children().css("background-color","#999")
	} else {
		$xq_head.css({"position":"relative","top":"0px"});
	}
});


/*添加数量*/
var $c_num=$(".c_num");
var c_numval=parseInt($c_num.text());
var $num_add=$(".num_add");
$num_add.click(function(event){
	c_numval++;
	$c_num.text(c_numval);
	localStorage.setItem('shuliang',c_numval);
});

var $num_jian=$(".num_jian");
$num_jian.click(function(event){
	if(c_numval!=1){
		c_numval--;
		$c_num.text(c_numval);
	}else{
		c_numval=1;
	}
	localStorage.setItem('shuliang',c_numval);
});


/*选择包的颜色*/
var $bao=$(".bao");
var $baoimgs=$bao.find("a");
$baoimgs.click(function(event){
	event.preventDefault();
	//var indeximg=$(this).index();
	$(this).css("border","1px solid #E5004f");
	$(this).siblings().css("border","1px solid #999");
});

/*尺寸的选择*/
var $choice_chicun=$(".choice_chicun");
$choice_chicun.find("a").click(function(event){
	event.preventDefault();
	//debugger;
	$(this).css("border","1px solid #E5004f");
});


/*页面跳转*/
var $addshoppingcar=$('.addshoppingcar');
$addshoppingcar.click(function(event){
	window.location='shoppingcar.html';
});



















