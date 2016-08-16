
/*************************首页ajax获取数据*****************************************/

$.ajax({
	url:"json/index.json",
	type:"get",
	success:function(res){
		var json=JSON.parse(res);
		createModule(json);
	},
	error:function(){
		alert("未获取");
	}
});

function createModule(json){
	var product=$("#product");
	//var num=0;

	//定义构造函数
	function createProduct(floor1){
		this.floor1=floor1;
	}

	//构造函数原型原型方法，动态添加节点，放到html中。
	createProduct.prototype.putInhtml = function() {
		// body...
		var str="";
		var str1="";
		var str2="";
		var str3="";
		var str4="";
		for(var i=0;i<json.product_left.product_top.length;i++){
			str1+="<li><a href='#'>"+json.product_left.product_top[i]+"</a></li>";
		}
		for(var i=0;i<json.product_middle.length;i++){
			str2+="<a href='#'><img src="+json.product_middle[i]+" /></a>";
		}
		for(var i=0;i<json.product_right.length;i++){
			str3+="<a class='dingwei'> <img src="+json.product_right[i]+" /><span></span> <div class='leftline'></div> <div class='topline'></div> <div class='rightline'></div> <div class='bottomline'></div> </a>";
		}
		str+="<div class='floor1_header'><h6></h6></div>";

		str+="<div class='floor1_center'> <div class='floor1_c_left'> <ul>"+str1+"</ul> <div class='floor1_c_l_lunbo'> <div><img src="+json.product_left.product_bottom.imgs+" /></div> </div> </div> <div class='floor1_c_center'> <div class='floor1_c_lunbo'> <div class='floorxiao'>"+str2+"</div> </div> </div> <div class='floor1_c_right'>"+str3+"</div>";
		str="<div class='layout floor1 louceng'>"+str+"</div>";
		product.append(str);
	};

	var createProduct1=new createProduct();
	for(var i=0;i<9;i++){
		createProduct1.putInhtml();
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
	
}









