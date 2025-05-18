<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../bootstrap-5.3.4-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="index.css">
    <script defer src="index.js"></script>
    <script>
        let visibledisp=false;
document.addEventListener("mousemove", function () {
    
    if(!visibledisp){
    document.getElementById("disp").style.display = "block";
    visibledisp=true;
    
    setTimeout(()=>{
        document.getElementById("disp").style.display="none";
        visibledisp=false;
    },8000);
}});
</script>

    
    <title>BUYMART MANAGEMENT SYSTEM</title>
</head>
<body >
    <style>
      
    .newbtnstyle{
        height:50px !important;
        width:100px !important;
        margin:10px !important;
        text-align:center !important;
        font-size:20px !important;
        font-weight: bold !important;
        border-radius:30px !important;
        
    }
    .searchstyle{
        height:40px !important;
        width:300px !important;
        padding:10px !important;
        font-weight:bold !important;
        font-size:30px !important;
        border-radius:15px !important;
        text-align:center !important;
        margin-right:10px !important;
        margin-top:20px !important;
        float:right !important; 
    }


    </style>
    <div class="text-danger bg-info" style="display:none;" id="disp">
        <input type="button" class="btn btn-danger newbtnstyle" value="Login" onclick="login()">
        <input type="button" class="btn btn-primary newbtnstyle" value="signup" onclick="signup()">
        <input type="button" class="btn btn-light newbtnstyle" value="admin" onclick="admin()">
        
</div>

<div id="pra4">
    <form action="" method="post">
        <input type="text" placeholder="username" name="uname"><br><br>
        <input type="password" name="pwd"><br><br>
        <input type="submit" value="submit" name="post1" style="height:40px; width:100px; border-radius:15px; margin:20px 0px 10px 130px"><br><br>
    </form>
</div>
<div id="pra5">
<form action="" method="post">
        <input type="text" placeholder="First Name" name="fname"><br>
        <input type="text" placeholder="Last Name" name="lname"><br>
        <input type="text" placeholder="User Name" name="uname"><br>
        <input type="password" name="pwd"><br>
       <div id="pra9"><label>Super user:</label><input type="radio" name="acc" value="su">
       <label>Guest user:</label><input type="radio" name="acc" value="gu"><br></div>
        <input type="submit" value="submit" name="post2" style="height:40px; width:100px; border-radius:15px; margin:20px 0px 10px 130px"><br>
    </form>
</div>
<div id="pra10">
<form action="" method="post">
        <input type="text" placeholder="First Name" name="fname"><br>
        <input type="text" placeholder="Last Name" name="lname"><br>
        <input type="text" placeholder="User Name" name="uname"><br>
        <input type="password" name="pwd"><br>
        <input type="submit" value="submit" name="post3" style="height:40px; width:100px; border-radius:15px; margin:20px 0px 10px 130px"><br>
    </form>
</div>
</body>
</html>


<?php
if(isset($_POST['post1'])){
    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
    $con=new mysqli("localhost","root","","projectii");
    if($con->connect_error){
        die("Connection Error");
    }else{
        $sql="select acc from login where uname='$uname' and pwd='$pwd'";
        $r=$con->query($sql);
        if($r && $r->num_rows > 0){ 
            $row = $r->fetch_assoc(); 
            $acc = $row['acc']; 
            if($acc == 1){
                header("Location: adminmain.php"); 
            }else if($acc == 2){
                header("Location: supermain.php"); 
            }else if($acc == 3){
                header("Location: guestmain.php"); 
            }
        }else{
            echo "<script>alert('User not found')</script>"; 
        }
    }

}
if(isset($_POST['post2'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
    $kacc=$_POST['acc'];
    if($kacc=="admin"){
        $acc=1;
    }else if($kacc=="su"){
        $acc=2;
    }else if($kacc=="gu"){
        $acc=3;
    }
    $con=new mysqli("localhost","root","","projectii");
    if($con->connect_error){
        die("Connection Error");
    }else{
        $sql="insert into login(fname,lname,uname,pwd,acc) values('$fname','$lname','$uname','$pwd','$acc')";
        if($con->query($sql) === TRUE){  
            header("Location: index.php"); 
        }else{
            echo "<script>alert('Error in registration')</script>"; 
        }
    }
}
if(isset($_POST['post3'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
    $acc=1;
    $con=new mysqli("localhost","root","","projectii");
    if($con->connect_error){
        die("Connection Error");
    }else{
        $sql="insert into login(fname,lname,uname,pwd,acc) values('$fname','$lname','$uname','$pwd','$acc')";
        if($con->query($sql) === TRUE){  
            header("Location: index.php"); 
        }else{
            echo "<script>alert('Error in registration')</script>"; 
        }
    }
}
?>
