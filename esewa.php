<?php
if (isset($_GET['pid'])) {
    $pid = rtrim($_GET['pid'],';');
   
    $con=new mysqli("localhost","root","","mis");
    if($con->connect_error){
        die("NO connection");
    }else{
        $sql="select pname,pprice,serchar,tax,total from uploads where id=$pid";
        $r=$con->query($sql);
        if($row=$r->fetch_assoc()){
            $pname=$row['pname'];
            $pprice=$row['pprice'];
            $serchar=$row['serchar'];
            $tax=$row['tax'];
            $total=$row['total'];
        }else{
            echo "<script>alert('no data found')</script>";
        }
    }
} else {
    echo "<script>alert('No product id found')</script>";
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Esewa payment integration</title>
</head>
<body>
<?php
    
    $tranuid = $pid . time();
    $signed_field_names = "total_amount,transaction_uuid,product_code";
    $signature_string ="total_amount={$total},transaction_uuid={$tranuid},product_code=EPAYTEST";
    $secret_key = "8gBm/:&EnhH.1/q"; 
    $s = hash_hmac('sha256', $signature_string, $secret_key, true);
    $signature = base64_encode($s);
    ?>
     
   <div id="pra15">
    <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
 <input type="text" id="amount" name="amount" value="<?php echo $pprice ?>" required>
 <input type="text" id="tax_amount" name="tax_amount" value ="<?php echo $tax ?>" required>
 <input type="text" id="total_amount" name="total_amount" value="<?php echo $total ?>" required>
 <input type="text" id="transaction_uuid" name="transaction_uuid" value="<?php echo $tranuid?>" required>
 <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required>
 <input type="text" id="product_service_charge" name="product_service_charge" value="<?php echo $serchar ?>" required>
 <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required>
 <input type="text" id="success_url" name="success_url" value="https://localhost/misproj/sucess.php" required>
 <input type="text" id="failure_url" name="failure_url" value="https://localhost/misproj/supermain.php" required>
 <input type="text" id="signed_field_names" name="signed_field_names" value="<?php echo $signed_field_names ?>" required>
 <input type="text" id="signature" name="signature" value="<?php echo $signature ?>" required>
 <input value="Submit" type="submit">
 </form></div> 
</body>
</html>