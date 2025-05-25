<?php
include "db.php";

$pid = $_POST['pname'];
$query = "INSERT INTO cart(id, qty) VALUES ('$pid', 20)";
$res = $conn->query($query);

if ($res) {
    $query1 = "SELECT * FROM cart";
    $res1 = $conn->query($query1);

    if ($res1 && $row = $res1->fetch_assoc()) {
        $pname = $row["id"];
        $total = $row["qty"];
        echo $pname . " " . $total . " ";
    } else {
        echo "Error fetching inserted data.";
    }
} else {
    echo "No data inserted";
}

$conn->close();
?>
