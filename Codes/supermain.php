
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
   <div id="pra18"><div ><input type="text" onkeyup="fa()" placeholder="Search here" id="pra19" autocomplete="off">

<span id="pra31"></span>
</div>
     </div>
     
     <a href="javascript:void(0);" onclick="display()"><div id="pra20"></div>
     
</a>
    </form>    
    
    </li>
    </li>
    </ul></div>
    <div id="pra21" >
    
<marquee direction="up" scrollamount="2" height="100%" style="color:green; font-size:35px; text-style:bold; ">
  This page was created by Mr. Prabin Poudel and Mr. Bibek Adhikari in partial fulfillment of 
  BCA 6th sem Project II. Thanks to Asst. Prof. Mr. Narayan Prashad Dahal, who played a crucial 
  role in helping us accomplish this privileged duty.
</marquee>



</div>
    <div id="pra22" >
  <!--All the filter as well as rest option will be inside this div.!-->
  <div id="pra29">
    
   <a href="#" onclick="filter()"><div id="pra23">



   </div></a>
   <a href="#" onclick="addToCart1()"><div id="pra28">



   </div></a>
<div id="pra32" >

    </div>
</div>
    <!--All the filter as well as rest option will be inside this div.!-->

   <div  id="pra24">
    <div id="pra27" onclick="hideUnhide()"> 
    

    </div>
     
   <form action="filter.php" method="post">
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
  </select>


    <div class="rangeslider">
        <input type="range" min="1" max="150000" value="1" onchange="change()" id="sliderRange" name="range">
        <p>Price Range: <span id="demo">1</span></p>
    </div>

    <script>
      function change(){
       let sv=document.getElementById("sliderRange").value;
        document.getElementById("demo").innerHTML=sv;
      
      }
    </script><br>
  <br><br><br>
  <input type="submit" value="filter" >

   </form>

   </div>

</div>
<div id="pra33">


</div>
<div id="pra35">
  <div id="pra36" onclick="carthide()">

  </div>
  <div id="pra37"></div>
</div>
   
    
<script defer src="index.js"></script>
<script defer src="../jquery/jquery.js"></script>

</body>
</html>

<?php
include "display.php";

?>
