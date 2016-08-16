/*******************ajax获取详情页的json数据************************/
$.ajax({
	url:"../json/shoppingproduct.json",
	type:"get",
	success:function(res){
		var json=JSON.parse(res);
		putInhtml(json);
	},
	error:function(){
		alert("未获取");
	}
});


/**************************处理数据****************************************/
function putInhtml(json){
	var d_s_left_c=$('.d_s_left_c');
	//构造函数
	function putdata(){

	}
	putdata.prototype.createputhtml=function(){
		var str="";
		var str1="";
		var str2="";
		var str3="";
		var str4="";
		for(var i in json.list){
			//console.log(json.list.[101])
			//for(var j in json.list.[101]){
				str1+="<h1>"+json.list[i].name+"</h1>";
				str2+="<span>银泰价：<a href='#'>"+json.list[i].price+"</a><img src='../images/dazhe.jpg' style='padding-left:10px;'></span>";
				str3+="<a href='#' class='package'><img src="+json.list[i].color[0]+"></a> <a href='#' class='package'><img src="+json.list[i].color[1]+"></a>";
				str4+="<td><span class='choice_chicun'><a href='#' class='choice_chicun_a'>"+json.list[i].size+"</a></td>";
				str+=str1+'<div class="d_s_left_c_price">'+str2+'</div> <div class="d_s_left_c_cankaojia"> <span>参考价：<a href="#">￥2400.00</a></span> </div> <div class="choice"> <table class="choice_tab"> <tr> <td class="choice_tab_left">选择颜色：</td> <td class="choice_tab_right"> <span class="bao">'+str3+'</span> </td> </tr> <tr> <td class="choice_tab_left">选择尺寸：</td>'+str4+'</tr> <tr> <td class="choice_tab_left choice_num"> <span class="c_num">1</span> <span class="c_num_control"> <b class="num_add"></b> <b class="num_jian"></b> </span> </td> <td class="choice_buy"> <span class="buy">立即购买</span> <span class="addshoppingcar">加入购物车</span> </td> </tr> </table> </div> <div class="service_commitment"> <span>服务承诺：</span> <span><img src="../images/duihao.jpg" style="padding-right:10px;">正品保障</span> <span><img src="../images/duihao.jpg" style="padding-right:10px;">支持无理由退换货</span> <span><img src="../images/duihao.jpg" style="padding-right:10px;">免运费</span> </div>';
				d_s_left_c.append(str);
			//}
			str="";
			str1="";
			str2="";
			str3="";
			str4="";
		}
	}
	var putdatanew=new putdata();
	putdatanew.createputhtml();
}




