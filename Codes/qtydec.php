<?php
include "db.php";
$pid=$_POST['pid'];
$query="select qty from cart where id=$pid";
$res=$conn->query($query);
if($res){
    if($row=$res->fetch_assoc()){
        $val=$row['qty']-1;
        if($val<=0){
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