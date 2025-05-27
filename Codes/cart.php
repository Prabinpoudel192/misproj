<?php
include "db.php";
$pid=$_POST['pid'];
$query="insert into cart(id,qty)values($pid,1)";
$res=$conn->query($query);
$data=[];
if ($res) {
    $query1 = "SELECT *FROM uploads where id=$pid";
    $res1 = $conn->query($query1);

    if($res1) {
        while($row=$res1->fetch_assoc()){
        $data[] = [
        'id' => $row['id'],
        'name' => $row['pname'],
        'description' => $row['pdes'],
        'price' => (float)$row['total'],
        'category' => $row['category'],
        'stock' => $row['stock'],
        'image' => $row['fname']  
    ];
}
        echo json_encode($data);
    } else {
        echo json_encode("Error fetching inserted data.");
    }
} else {
    echo json_encode("No data inserted");
}

$conn->close();
?>
