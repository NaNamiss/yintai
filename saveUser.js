
/*用户名的保存*/
var $username=$('.username');
$username.text(localStorage.getItem('dangqianuser'));
var $login_register=$('.login_register');
$login_register.hide();
var $quit=$('.quit');
$quit.text("退出");
$quit.click(function(event){
	$quit.hide();
	$username.hide();
	$login_register.show();
});










