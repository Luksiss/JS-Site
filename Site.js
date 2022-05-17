//#region validate
var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["admin", "test"];  
var pwArray = ["admin", "test"]; 

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}
//#endregion
//#region sucesso
if (valid) {
alert ("Logado com sucesso!");
window.location = "http://www.google.com";
return false;
}
//#endregion
//#region tentativas
var t = " tentativas";
if (count == 1) {t = " tentativas"}

if (count >= 1) {
alert ("E-mail ou senha invalidos. Você tem " + count + t + " restantes...");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Acabaram suas tentativas!");
document.myform.username.value = "Tente outra hora!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}

}
//#endregion