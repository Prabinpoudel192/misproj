<?php
include "db.php";
$uname=$_POST['uname'];
$query="delete from login where uname='$uname'";
$res=$conn->query($query);
$conn->close();
?>