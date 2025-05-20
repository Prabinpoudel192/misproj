<?php
include("db.php");

$pname = $_POST["pname"];
if($pname == ""){
    echo json_encode([]);
    exit(0);
}

$query = "SELECT * FROM uploads WHERE pname LIKE '%$pname%'";
$result = $conn->query($query);
$output = [];
$i=0;
while ($row = $result->fetch_assoc()) {
    $output[i] = $row["pname"];
    $i++;
}

echo $output;
$conn->close();
?>
