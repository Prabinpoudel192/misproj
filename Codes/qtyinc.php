<?php
include "db.php";
$pid=$_POST['pid'];
$query="SELECT *from cart inner join uploads on cart.id=uploads.id Where cart.id='$pid'";
$res=$conn->query($query);
if($res){
    if($row=$res->fetch_assoc()){
        $val=$row['qty']+1;
        $stock=$row['stock'];
        if($val>$stock){
            echo json_encode("exit");
            $conn->close();
            exit;
        }
        $query1="update cart set qty=$val where id=$pid";
        $res1=$conn->query($query1);
        if($res1){
            echo json_encode($val);
        }
    }
    
}

$conn->close();

?>