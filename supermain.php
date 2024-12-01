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
    <script src="index.js"></script>
    <title>Super Main</title>
</head>
<body>
    <div id="pra6">
        <ul>
    <li><a href="index.php"><div style="height:35px; width:40px; border:2px solid green; border-radius:50px; margin:-20px 0px 20px 20px; background-image:url('images/logout.png'); background-size:cover;">
        </div></a></li>
        <li><a href="upload.php"><div style="height:35px; width:40px; border:2px solid green; border-radius:50px; margin:-20px 0px 20px 20px; background-image:url('images/upload.jpg'); background-size:cover;">
        </div></a></li>
    </ul></div>
    <?php
    while($row=$ra->fetch_assoc()){
     $pid=$row['id'];
     $pname=$row['pname'];
     $pprice=$row['pprice'];
     $pdes=$row['pdes'];
     $fname=$row['fname'];
     $tax=$row['tax'];
     $sercha=$row['serchar'];
     $total=$pprice+$tax+$sercha;
    echo "<div id='pra11'>
        <div style='height:320px;
    width:100%;
    box-sizing:border-box;
    border:5px solid purple;
    background-image:url(\"$fname\");
    background-size:cover;
    background-repeat:no-repeat;
    border-radius:15px;'></div>
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
             background-color:yellow;color:red; font-weight:bold; margin:10px 50px 10px 100px;'>
            </form>
            </div>
    </div>";
    }
    ?>
</body>
</html>