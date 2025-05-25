<?php
include "db.php";
$data=[];
$query="select id,pname,pdes,total,category,stock,fname from uploads";
$res=$conn->query($query);
while($row=$res->fetch_assoc()){
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


?>