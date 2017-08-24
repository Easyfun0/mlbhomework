
var send = document.querySelector('.send');

send.addEventListener('click',signup,false);

function signup(){
    var emailStr = document.querySelector('.account').value;
    var numberStr = document.querySelector('.number').value;
    var peopleStr = document.querySelector('.people').value;
    var YESorNOStr = document.querySelector('.YESorNO').value;
    var idStr = document.querySelector('.id').value;
    var menStr = document.querySelector('.men').value;
    var womenStr = document.querySelector('.women').value;

    var account = {};
    account.password = idStr;
    account.number = numberStr;
    account.email = emailStr;  
    account.people = peopleStr;
    account.YESorNO = YESorNOStr;
    account.men = menStr;
    account.women =womenStr;
    

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool.github.io/ajaxHomework/data.json',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(account);
    xhr.onload = function(){
    	console.log(xhr);
    }
}