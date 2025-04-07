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
    <title>Super Main</title>
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
     echo "<div class='container bg-dark bg-gradient' style='width:900px; z-index:0; height:100vh; overflow-y:scroll; background-color:#a8e6ce !important;'>";
    while($row=$ra->fetch_assoc()){
     $pid=$row['id'];
     $pname=$row['pname'];
     $pprice=$row['pprice'];
     $pdes=$row['pdes'];
     $fname=$row['fname'];
     $tax=$row['tax'];
     $sercha=$row['serchar'];
     $total=$pprice+$tax+$sercha;

     echo "<div style='height:auto; width:auto; background-color:#fff;z-index:0; position:relative; margin-top:100px;'>";
     //display components starts here
     echo "<div class='container-lg' style='margin-top:30px; margin-bottom:20px; background-color:#000;border-radius:25px; z-index:0;'>
        <div class='container-fluid row' style='
   z-index:0;
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
border-radius:15px;'></div>'
        <div id='pra13'>
            <h3 style='text-align:center; font-weight:bold;'>$pname</h3>
            <h5 style='font-weight:Bold; margin:10px;'>
               Price:".$pprice."<br>
               Service-Charge:".$sercha."<br> 
               Taxable-Amount:".$tax."<br>
               <hr>
               Total-Amount:".$total."<br>
               Description:".$pdes."<br>
                 
            </h5>
            <form action='esewa.php?pid=$pid;' method='POST'>

            <input type='submit'  value='Pay Rs:$total Via esewa' style='height:50px;width:auto;border-radius:30px;
             background-color:yellow;color:red; font-weight:bold; margin:10px 0px 10px 300px;'>
            </form>
           </div>

</div></div>";
//display components ends here
    }
    echo "</div>";
    ?>
</body>
</html>
/*
<?php
$con=new mysqli("localhost","root","","mis");
if($con->connect_error){
    die("No connection.");
}else{
    $sql="select *from uploads";
    $ra=$con->query($sql);
}

?>
