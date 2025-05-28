<?php
include "db.php";
$pid=$_POST['pid'];
$query="delete from cart where id='$pid'";
$res=$conn->query($query);
if($res){
    echo json_encode("done");
}
$conn->close();
exit;

?>