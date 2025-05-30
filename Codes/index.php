<?php
    session_start();
include "db.php";
if(isset($_POST['post1'])){
    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
        $sql="select acc from login where uname='$uname' and pwd='$pwd'";
        $r=$conn->query($sql);
        if($r && $r->num_rows > 0){ 
            $row = $r->fetch_assoc(); 
            $acc = $row['acc']; 
            $_SESSION['uname'] = $uname;
            if($acc == 1){
               header("Location:prabin.php");
               exit();
            }else if($acc == 2){
                header("Location:prabin.php");
               exit();
            }else if($acc == 3){
              header("Location: guestmain.php"); 
               exit();
            }
        }else{
         echo "<script>alert('User not found')</script>";
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
    if($conn->connect_error){
        die("Connection Error");
    }else{
        $sql="insert into login(fname,lname,uname,pwd,acc) values('$fname','$lname','$uname','$pwd','$acc')";
        if($conn->query($sql) === TRUE){  
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
    if($conn->connect_error){
        die("Connection Error");
    }else{
        $sql="insert into login(fname,lname,uname,pwd,acc) values('$fname','$lname','$uname','$pwd','$acc')";
        if($conn->query($sql) === TRUE){  
            header("Location: index.php"); 
        }else{
            echo "<script>alert('Error in registration')</script>"; 
        }
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../bootstrap-5.3.4-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="index.css">
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
<body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            overflow: hidden;
            position: relative;
            z-index:0;
        }

         body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:url("../images/bgindex.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.2;
            z-index: -1;
        } 
        
    </style>

    <!-- Animated Background -->
    <div class="bg-animation">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="floating-shape shape-4"></div>
    </div>

    <!-- Navigation Bar -->
    <div class="text-danger bg-info" style="display:none;" id="disp">
        <input type="button" class="btn btn-danger newbtnstyle" value="Login" onclick="login()">
        <input type="button" class="btn btn-primary newbtnstyle" value="Signup" onclick="signup()">
        <input type="button" class="btn btn-light newbtnstyle" value="Admin" onclick="admin()">
    </div>

    <div class="main-container">
        <!-- Welcome Screen -->
        <div class="welcome-screen" id="welcome">
            <h1 class="welcome-title icon-cart">
                BUYMART
            </h1>
            <p class="welcome-subtitle">Management System</p>
            <p class="welcome-instruction icon-mouse">
                Move your mouse to get started
            </p>
        </div>

        <!-- Login Form -->
        <div class="form-container" id="pra4">
            <h2 class="form-title icon-login">
                Welcome Back
            </h2>
            <p class="form-subtitle">Sign in to your account</p>
            <form action="" method="post">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Username" name="uname" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Password" name="pwd" required>
                </div>
                <input type="submit" value="Sign In" name="post1" class="submit-btn">
            </form>
        </div>

        <!-- Signup Form -->
        <div class="form-container" id="pra5">
            <h2 class="form-title icon-signup">
                Join Us
            </h2>
            <p class="form-subtitle">Create your account</p>
            <form action="" method="post">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="First Name" name="fname" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Last Name" name="lname" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Username" name="uname" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Password" name="pwd" required>
                </div>
                <div class="radio-group">
                    <div class="radio-item">
                        <input type="radio" name="acc" value="su" id="su" required>
                        <label for="su">Super User</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" name="acc" value="gu" id="gu" required>
                        <label for="gu">Guest User</label>
                    </div>
                </div>
                <input type="submit" value="Create Account" name="post2" class="submit-btn">
            </form>
        </div>

        <!-- Admin Form -->
        <div class="form-container" id="pra10">
            <h2 class="form-title icon-admin">
                Admin Access
            </h2>
            <p class="form-subtitle">Administrator registration</p>
            <form action="" method="post">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="First Name" name="fname" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Last Name" name="lname" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Username" name="uname" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Password" name="pwd" required>
                </div>
                <input type="submit" value="Register Admin" name="post3" class="submit-btn">
            </form>
        </div>
    </div>
</body>
<script defer src="index.js"></script>
</html>


