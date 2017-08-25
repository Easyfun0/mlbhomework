// var send = document.querySelector('.send');

// send.addEventListener('click',signup,false);
// function signup(){
// 	var emailStr = document.querySelector('.account').value;
// 	var passwordStr = document.querySelector('.password').value;
// 	var account = {};
// 	account.email = emailStr;
// 	account.password =passwordStr;
	
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
// 	xhr.setRequestHeader('Content-type','application/json');
// 	var data = JSON.stringify(account);
// 	xhr.send(data);
// 	xhr.onload = function(){
// 		var callbackData = JSON.parse(xhr.responseText);
// 		console.log(callbackData);
// 		var veriStr = callbackData.message;
// 		if(veriStr =="帳號註冊成功"){
// 			alert('帳號註冊成功');
// 		}else{
// 			alert('帳號註冊失敗');
// 		}
// 	}
// }
// ---------


var signupbtn = document.querySelector('.signup');
var signinbtn = document.querySelector('.signin');
signupbtn.addEventListener('click',signup,false);
signinbtn.addEventListener('click',signin,false);


function signup(){
	var inor = document.querySelector(".inor");
	var emailStr = document.querySelector('.account').value;
	var passwordStr = document.querySelector('.password').value;
	var account = {};
	account.email = emailStr;
	account.password =passwordStr;

	var xhr = new XMLHttpRequest();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
	xhr.setRequestHeader('Content-type','application/json');
	var data = JSON.stringify(account);
	xhr.send(data);
	xhr.onload = function(){
		var callbackData = JSON.parse(xhr.responseText);
		var veriStr = callbackData.message;
		if(veriStr == "帳號註冊成功"){
			inor.textContent = "帳號註冊成功";
			}else{
			inor.textContent = veriStr;
		}
	};	
}

function signin(){
	var inor = document.querySelector(".inor");
	var emailStr = document.querySelector('.account').value;
	var passwordStr = document.querySelector('.password').value;
	var account = {};
	account.email = emailStr;
	account.password =passwordStr;

	var xhr = new XMLHttpRequest();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
	xhr.setRequestHeader('Content-type','application/json');
	var data = JSON.stringify(account);
	xhr.send(data);
	xhr.onload = function(){
		var callbackData = JSON.parse(xhr.responseText);
		var veriStr = callbackData.message;
		if(veriStr == "登入成功"){
			inor.textContent = "帳號登入成功";
			}else{
			inor.textContent = veriStr;
		}
	};	
}