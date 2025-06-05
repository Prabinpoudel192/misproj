<?php
include "db.php";
$uname=$_POST['uname'];
$query="update login set status='active' where uname='$uname'";
$res=$conn->query($query);
$conn->close();
?>