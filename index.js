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