<?php
include "db.php";
$pid=$_POST['pid'];
$data=[];
if($pid==""){
$query = "SELECT *FROM uploads";
}else{
    $query="select *from uploads where id='$pid'";
}
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