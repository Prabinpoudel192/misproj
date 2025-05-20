
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
 
 function display(){
document.getElementById("pra18").style.display="block";
document.getElementById("pra20").style.display="none";

 }
 
 function second(){

var current=document.getElementById("pra25").value;
if(current==="high"){
document.getElementById("pra26").value="low1";

}else{
document.getElementById("pra26").value="high1";

}}
function filter(){

document.getElementById("pra29").style.display="none";
document.getElementById("pra24").style.display="block";


}
function filter1(){

document.getElementById("pra29").style.display="flex";
document.getElementById("pra24").style.display="none";


}
function addToCart(){

document.getElementById("pra29").style.display="none";
document.getElementById("pra24").style.display="block";


}
function addToCart1(){

document.getElementById("pra29").style.display="flex";
document.getElementById("pra24").style.display="none";


}


 
  function second1(){

var current=document.getElementById("pra26").value;
if(current==="high1"){
document.getElementById("pra25").value="low";

}else{
document.getElementById("pra25").value="high";
}}

function fa(){
$(document).ready(function(){

    let pn=$("#pra19").val();
    $.ajax({
        url:'search.php',
        method:'POST',
        data:{pname:pn},
        dataType:'json',
        success:function(data){
            $('#pra18').css("z-index",6);
            $('#pra31').css("display","block");
            $('#pra23').css("display","none");
            $('#pra28').css("display","none");
            $('#pra32').css("display","block");
            $('#pra32').html("");
            for(let i=0;i<data.length;i++){
            $('#pra32').append('<a href="#" onclick="pra(\'' + data[i] + '\')">' + data[i] + '</a><br>');

            }
            $("#pra32").css("font-size","35px");
            $('#pra32').css("color","green");
            if(data.length===0){
$("#pra29").css("display","flex");
$('#pra32').css("display","none");
$('#pra23').css("display","flex");
$('#pra28').css("display","flex");
    }
        }
    })
})
}
//search anchor logic starts here

//search andchor logic ends here




function hideUnhide(){
document.getElementById("pra24").style.display="none"
document.getElementById("pra32").style.display="none"
document.getElementById("pra29").style.display="flex"
document.getElementById("Pra23").style.display="flex"
document.getElementById("pra28").style.display="flex"


}
function pra(data){



}
