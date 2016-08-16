
/**/
var $phone = $("#phone");
var $password=$("#password");
var $passwordagain=$("#passwordagain");
var phone=$phone.val();
var password=$password.val();
var passwordagain=$passwordagain.val();
var $register=$("#register");
var ulseregex=/^1[3|4|5|7|8]\d{9}$/;
var registeregex=/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}$/;

$phone.blur(function(event){
	if(ulseregex.test($phone.val())){
		$(".user_tanhao").hide();
		$(".user_ok").show();
	}else{
		$(".user_ok").hide();
		$(".user_tanhao").show();
	}
});

$password.focus(function(event){
	$(".password_tanhao").show();
});

$password.blur(function(event){
	if(registeregex.test($password.val())){
		$(".password_tanhao").hide();
		$(".password_ok").show();
	}else{
		$(".password_ok").hide();
		$(".password_tanhao").show();
	}
});

$passwordagain.blur(function(event){
	if(password!==passwordagain){
		$(".passwordagain_tanhao").show();
		$(".passwordagiain_ok").hide();
	}else{
		$(".passwordagain_tanhao").hide();
		$(".passwordagiain_ok").show();
	}
});


$register.click(function(event){
	var personObj = {};
	var phone=$phone.val();
	var password=$password.val();

	var personObj = localStorage.getItem('personKey');
	if(personObj === null) {
		personObj = {};
	}else {
		personObj = JSON.parse(personObj);
	}

	if(phone==null){
		alert("请填写内容");
		return;
	}
	if(personObj[phone] && phone === personObj[phone].phone) {
		if(confirm("此用户名已存在，确定要修改吗")){
			personObj[phone] = {
				phone: phone,
				password: password
			};
			localStorage.setItem('personKey', JSON.stringify(personObj));
			return;	
		}
	}
	personObj[phone] = {
		phone: phone,
		password: password
	};
	localStorage.setItem('personKey', JSON.stringify(personObj));
	location.href='login.html';
});



/*$register.click(function(event){
	localStorage.setItem('phone',$phone.val());
	localStorage.setItem('password',$password.val());
	location.href='login.html';
});*/








