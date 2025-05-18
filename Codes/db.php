<?php
$conn=new mysqli("localhost","root","","projectii");
if($conn->connect_error){


    die("No Database connection".$conn->connect_error);
}
?>