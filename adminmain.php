<?php
$con=new mysqli("localhost","root","","mis");
if($con->connect_error){
    die("No connection.");
}else{
    $sql="select *from uploads";
    $ra=$con->query($sql);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Admin Main</title>
    <link rel="stylesheet" href="bootstrap-5.3.4-dist/css/bootstrap.min.css">

</head>
<body>
    <div id="pra6" style="z-index:2; margin:-5px 0px 10px 0px;">
        <ul>
        <li><a href="index.php"><div style="position:relative; margin:5px 10px 100px 10px;border-radius:20px; height:55px; width:80px; border:2px solid green;  background-image:url('images/logout.png'); background-size:cover;">
        </div></a></li>
        <li><a href="upload.php"><div style="position:relative; margin:5px 10px 10px 10px;border-radius:20px; height:55px; width:80px; border:2px solid green;  background-image:url('images/upload.jpg'); background-size:cover;">
        </div></a></li>
    </ul></div>
    <?php
      echo "<div class='container bg-dark bg-gradient' style='width:900px; z-index:1; height:100vh; overflow-y:scroll; background-color:#a8e6ce !important;'>"; 
    while($row=$ra->fetch_assoc()){
     $pname=$row['pname'];
     $pprice=$row['pprice'];
     $pdes=$row['pdes'];
     $fname=$row['fname'];
 echo "<div style='height:auto; width:auto; background-color:#fff;z-index:1; position:relative; margin-top:100px;'>";
   //display components starts here
   echo "<div class='container-lg' style='margin-top:30px; margin-bottom:20px; background-color:#000;border-radius:25px;'>
   <div class='container-fluid row' style='
   z-index:1;
   position:relative; 
   margin:5px;
   border-radius:20px; 
   height:500px;
   width:auto;
box-sizing:border-box;
border:5px solid purple;
background-image:url(\"$fname\");
background-size:100%;
background-repeat:no-repeat;
border-radius:15px;'></div>
   <div class='container-md' id='pra13' style='z-index:1;position:relative; margin:0px; border-radius:20px; height:180px;width:auto; '>  
   <h3 style='text-align:center; font-weight:bold;'>$pname</h3>
       <h5 style='font-weight:Bold; margin:10px;'>
          Price:".$pprice."<br>
          Description:".$pdes."<br>

       </h5>
   </div>

</div></div>";
//display components ends here
    }
    echo "</div>";
    ?>
    <script src="bootstrap-5.3.4-dist/js/bootstrap.min.js"></script>
</body>
</html>


