<?php
include "db.php";
$data=[];
    $query1 = "SELECT *from cart inner join uploads on cart.id=uploads.id";
    $res = $conn->query($query1);

    if($res) {
        while($row=$res->fetch_assoc()){
        $data[] = [
        'id' => $row['id'],
        'name' => $row['pname'],
        'description' => $row['pdes'],
        'price' => (float)$row['total'],
        'category' => $row['category'],
        'stock' => $row['stock'],
        'image' => $row['fname'],  
        'qty'   =>$row['qty'],
    ];
}
        echo json_encode($data);
    } else {
        echo json_encode("Error fetching inserted data.");
    }


$conn->close();
?>
