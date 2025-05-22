<?php
include "db.php";
$pname = $_POST["pname"];
if($pname==""){
    $query="Select *from uploads";
}else{
    $query="select *from uploads where pname='$pname'";

}
$html .= "<div id='pra34' class='container bg-dark bg-gradient' style='width:900px; height:100vh; overflow-y:scroll; background-color:#a8e6ce !important;'>";
$ra = $conn->query($query);

while ($row = $ra->fetch_assoc()) {
    $pid = $row['id'];
    $pname = $row['pname'];
    $pprice = $row['pprice'];
    $pdes = $row['pdes'];
    $fname = $row['fname'];
    $tax = $row['tax'];
    $sercha = $row['serchar'];
    $total = $pprice + $tax + $sercha;

    $html .="<div style='height:auto; width:auto; background-color:#fff; z-index:0; position:relative; margin-top:100px;'>";
    
    // Display components start here
    $html .="<div class='container-lg' style='margin-top:30px; margin-bottom:20px; background-color:#000; border-radius:25px; z-index:0;'>
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
            border-radius:15px;'>
        </div>
        <div id='pra13'>
            <h3 style='text-align:center; font-weight:bold;'>$pname</h3>
            <h5 style='font-weight:bold; margin:10px;'>
               Price: $pprice<br>
               Service-Charge: $sercha<br> 
               Taxable-Amount: $tax<br>
               <hr>
               Total-Amount: $total<br>
               Description: $pdes<br>
            </h5>
            <div id='pra30'>
                <form action='esewa.php?pid=$pid' method='POST'>
                    <input type='button' value='Add to Cart' onclick='addToCart()'>
                    <input type='submit' value='Pay via Esewa $total'>
                </form>
            </div>
        </div>
    </div>
</div>";
    // Display components end here
}

$html .="<input type='button' class='btn btn-danger newbtnstyle' value='Refresh' onClick='home()' style='display:block; marginTop:100px;''>";
$html .="</div>";
echo $html;
$conn->close();


?>