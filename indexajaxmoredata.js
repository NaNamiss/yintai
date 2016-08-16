
/*************************ajax获取json数据**************************************/
$.ajax({
	url:"json/indexmoredata.json",
	type:"get",
	success:function(res){
		var json=JSON.parse(res);
		createModule(json);
	},
	error:function(){
		alert("未获取");
	}
});

/***************************处理数据*********************************************/
function createModule(json){
	var product=$('#product');

	/********构造函数***********/
	function createpruduct(floor1){
		this.floor1=floor1;
	}
	createpruduct.prototype.putInhtml=function(){
		for(var i in json.list){
			var str="";
			var str1="";
			var str2="";
			var str3="";
			var str4="";

			for(var j=0;j<json.list[i].product_left.product_top.length;j++){
				str1+="<li><a href='#'>"+json.list[i].product_left.product_top[j]+"</a></li>";
			}
			for(var k=0;k<json.list[i].product_middle.length;k++){
				str2+="<a href='#'><img src="+json.list[i].product_middle[k]+" /></a>";
			}
			for(var m=0;m<json.list[i].product_right.length;m++){
				str3+="<a class='dingwei'> <img src="+json.list[i].product_right[m]+" /><span></span> <div class='leftline'></div> <div class='topline'></div> <div class='rightline'></div> <div class='bottomline'></div> </a>";
			}
			str4+=json.list[i].product_left.product_bottom.imgs;

			str+="<div class='floor1_header'><h6></h6></div>";

			str+="<div class='floor1_center'> <div class='floor1_c_left'> <ul>"+str1+"</ul> <div class='floor1_c_l_lunbo'> <div><img src="+str4+" /></div> </div> </div> <div class='floor1_c_center'> <div class='floor1_c_lunbo'> <div class='floorxiao'>"+str2+"</div> </div> </div> <div class='floor1_c_right'>"+str3+"</div>";

			str="<div class='layout floor1 louceng'>"+str+"</div>";
			product.append(str);
		}
	}

	var createpruduct1=new createpruduct();
	createpruduct1.putInhtml();
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
	
}






