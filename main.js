
/*原生js，header部分的"我的银泰"，下拉效果*/
var _myyintai=document.getElementById("myyintai");
function player(){
	_myyintai.onmouseover=function(){
		this.children[1].style.display="block";
		this.children[1].style.zIndex=9;
		this.children[1].style.position="absolute";
		this.children[1].style.background="#fff";
		/*this.children[1].children.children.style.color="#666666";*/
	}
	_myyintai.onmouseout=function(){
		this.children[1].style.display="none";
	}
}
player();


/*二级菜单显示*/
var $nav = $("#nav");
var $li = $nav.find("li");
$li.hover(function(event){
	$li.append($("#nav_menu"));
	 if(!event.relatedTarget || event.relatedTarget !== this && !this.contains(event.relatedTarget)){
	 	$(this).find("#nav_menu").show();
	 }
},function(event){
	$("#nav_menu").remove();
	if(!event.relatedTarget || event.relatedTarget !== this && !this.contains(event.relatedTarget)){
	 	$(this).find("#nav_menu").hide();
	 }
});

/*第一个Tab切换*/
var $tab1_biaoti_li = $(".tab1_biaoti").find("li");
var $tab1_left_centerdiv = $(".tab1_left_center").find("div");
$tab1_biaoti_li.mouseover(function(event){
	var index = $(this).index();
	$tab1_left_centerdiv.eq(index).show();
	$tab1_left_centerdiv.eq(index).siblings().hide();
});

/*第二个Tab切换*/
var $tab2_biaoti_li = $(".tab2_biaoti").find("li");
var $tab2_zgtk_r_content_div = $(".tab2_zgtk_r_content").find("div");
$tab2_biaoti_li.bind("mouseover",function(event){
	var index = $(this).index();
	$tab2_zgtk_r_content_div.eq(index).show();
	$tab2_zgtk_r_content_div.eq(index).siblings().hide();
});


/*楼梯效果*/
var $float_nav = $(".float_nav");
var $floor = $(".floor");
var client_height = $(window).height();
$(document).scroll(function(event){
	var doc_top = $(this).scrollTop();
	if(doc_top > client_height){
		$float_nav.fadeIn();
	}else {
		$float_nav.fadeOut();
	}
	$floor.find(".louceng").each(function(index,elem){
		var rel_top = $(elem).offset().top;
		if(doc_top>=(rel_top -  client_height/2)){
			$float_nav.find("a").removeClass("active");
			$float_nav.find("a").eq(index).addClass("active");
		}
	});
});
$float_nav.find("a").not(".float_nav_last").click(function(event){
	var index = $(this).index();
	var $cur_Module = $floor.find(".louceng").eq(index);
	var $cur_top = $cur_Module.offset().top;
	$("body").animate({
		scrollTop : $cur_top
	},200);
});
$(".float_nav_last").click(function(event){
	$("body").animate({
		scrollTop : 0
	},500);
});


/*********************当点击商品时，记录当前商品的ID号***************************/
/*var $tab1_neirong_temai_a = $(".tab1_neirong_temai").find("a");
$tab1_neirong_temai_a.click(function(){
	var idkey = $(this).attr("id");
	localStorage.setItem("idkey",idkey);
});
*/












