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
    <link rel="stylesheet" href="../bootstrap-5.3.4-dist/css/bootstrap.min.css">

</head>
<body>
    <div id="pra6" style="z-index:2; margin:-5px 0px 10px 0px;">
        <ul>
        <li><a href="index.php"><div id="pra16">
        </div></a></li>
        <li><a href="upload.php"><div id="pra17">
        </div></a>
        <li>
    <form action="" method="POST">
   <div id="pra18"><div ><input type="text" onKeyup="Search()" placeholder="Search here" id="pra19"></div>
     </div>
     <a href="javascript:void(0);" onclick="display()"><div id="pra20"></div>
     
</a>
    </form>    
    
    </li>
    </li>
    </ul></div>
    <div id="pra21"
    >
<marquee direction="up" scrollamount="2" height="100%" style="color:green; font-size:35px; text-style:bold; ">
  This page was created by Mr. Prabin Poudel and Mr. Bibek Adhikari in partial fulfillment of 
  BCA 6th sem Project II. Thanks to Asst. Prof. Mr. Narayan Prashad Dahal, who played a crucial 
  role in helping us accomplish this privileged duty.
</marquee>



</div>
    <div id="pra22">
  <!--All the filter as well as rest option will be inside this div.!-->
  <div id="pra29">
   <a href="#" onclick="filter()"><div id="pra23">



   </div></a>
   <a href="#" onclick="addToCart()"><div id="pra28">



   </div></a>
</div>
    <!--All the filter as well as rest option will be inside this div.!-->

   <div  id="pra24">
    <div id="pra27" onclick="filter1()">
    

    </div>
     
   <form action="" method="post">
    <input type="text" name="pname" placeholder="Enter Product Name"><br>
    <label>Price:</label><br>
    <select id="pra25" name="price" onchange="second()"required>
    <option value="">-- price --</option>
    <option value="high">High</option>
    <option value="low">Low</option>
  </select>
  
  <label>To:</label>
<select id="pra26" name="price1" onchange="second1()" required>
    <option value="">-- price --</option>
    <option value="high1">High</option>
    <option value="low1">Low</option>
  </select><br><br><br>
  <input type="submit" value="filter">

   </form>

   </div>

</div>
   
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
            <div id='pra30'>
            <form action='esewa.php?pid=$pid;' method='POST' >
            <input type='button' value='Add to Cart' onclick='addToCart()'>
            <input type='submit'  value='Pay via Esewa $total' >
            </form></div>
           </div>

</div></div>";
//display components ends here
    }
    echo "<input type='button' class='btn btn-danger newbtnstyle' value='Refresh' onClick='home()'
    style='margin:30px 0px 10px 350px;'>";
    echo "</div>";
?>
<script defer src="index.js"></script>
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
