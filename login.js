
/*登录的js*/

var $login=$("#login");
$login.click(function(event){
	var loginphone=$("#loginphone").val();
	var loginpassword=$("#loginpassword").val();
	var personObj = localStorage.getItem('personKey');
	personObj = JSON.parse(personObj);
	if(personObj == null || !personObj[loginphone]) {
		alert('该用户名未注册');
		location.href = '/register.html'
		return;
	}
	if(loginphone === personObj[loginphone].phone && loginpassword === personObj[loginphone].password) {
		alert("ok，登录成功");
		var dangqianuser=localStorage.setItem('dangqianuser',loginphone);
		location.href='../index.html';
	}else {
		alert("登录失败");
	}
});




























