function login() {
    setTimeout(() =>{
    document.getElementById("pra4").style.display="block";
    document.getElementById("pra5").style.display="none";
    document.getElementById("pra10").style.display="none";
}, 2000);
}
function signup(){
    setTimeout(()=>{
        document.getElementById("pra5").style.display="block";
        document.getElementById("pra4").style.display="none";
        document.getElementById("pra10").style.display="none";
    },2000);
}
function admin(){
    setTimeout(()=>{
        document.getElementById("pra10").style.display="block";
        document.getElementById("pra5").style.display="none";
        document.getElementById("pra4").style.display="none";
    },2000);
}
function home(){
    window.location.href="supermain.php";
}
function esewa(pid){
 window.location.href="esewa.php?pid="+ pid;
 }
 function Search(){
    alert("The search option was clicked");
 }
 function display(){
document.getElementById("pra18").style.display="block";
document.getElementById("pra20").style.display="none";

 }
 function filter(){
alert("The filter icon was clicked");



 }