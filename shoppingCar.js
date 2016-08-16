
/*购物车js*/
function shoppingCar(){
	var $goods_num=$('.goods_num');
	var $money=$('.money');
	var $goods_add=$('.goods_add');
	var $goods_jian=$('.goods_jian');
	var $goods_jifen=$('.goods_jifen');
	var init_goodsnum=localStorage.getItem('shuliang');

	function init(){
		renderInit();
		goods_add();
		goods_jian();
		moneyEvent(init_goodsnum);
	}
	function goods_add(){
		$goods_add.click(function(event){	
			init_goodsnum++;
			moneyEvent(init_goodsnum);	
		});
	}
	function goods_jian(){
		$goods_jian.click(function(evnet){
			init_goodsnum--;
			if(init_goodsnum<1){
				init_goodsnum=1;
			}
			moneyEvent(init_goodsnum);
		});
	}
	function moneyEvent(init_goodsnum){
		//debugger;
		var tPrice=80;
		var totalPrice=80;
		totalPrice=init_goodsnum*tPrice;
		renderInit(totalPrice);
	}
	function renderInit(totalPrice){
		$goods_num.text(init_goodsnum);
		$money.text(totalPrice);
		$goods_jifen.text(totalPrice);
	}
	return {
		init:init
	}
}
var car = new shoppingCar();
car.init();

/*全选*/
var $cbqx=$('.cbqx');
var $cbselectAll=$('.cbselectAll');
$cbqx.click(function(event){
	if ($cbselectAll.attr("checked") != "checked") {
	    $cbselectAll.attr("checked", "checked");
	}else {
		$cbselectAll.removeAttr("checked");
	}
});


/*删除*/
var $goods_contains=$('.goods_contains');
var $goodsdelete=$('.goodsdelete');
$goodsdelete.click(function(event){
	$goods_contains.remove();
});













