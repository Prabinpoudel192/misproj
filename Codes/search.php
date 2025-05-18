<?php
include("db.php");

$pname = $_POST["pname"];
if($pname==""){
echo "";
exit(0);

}
$query="select *from uploads where pname like '%$pname%'";
$result=$conn->query($query);
$output="";
while ($row = $result->fetch_assoc()) {
$output .=$row["pname"]."<br>";
    
}
if($output==""){
echo "No Result Found";

}else{
echo $output;

}
$conn->close();
?>
