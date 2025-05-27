<?php
include "db.php";
$data=[];

    $pname = $_POST['pname'];       
    $price = $_POST['price'];       
    $categoryFilter = $_POST['cfilter'];     
    $range = $_POST['range'];  
    

   if($price=="high"){
    $query="select *from uploads where pname like'%$pname%' and total <=$range and category='$categoryFilter' order by total asc";
   }else{
$query="select *from uploads where pname like'%$pname%' and total<=$range and category='$categoryFilter' order by total desc";
   }
$ra = $conn->query($query);

while ($row = $ra->fetch_assoc()) {
$data[] = [
        'id' => $row['id'],
        'name' => $row['pname'],
        'description' => $row['pdes'],
        'price' => (float)$row['total'],
        'category' => $row['category'],
        'stock' =>(int) $row['stock'],
        'image' => $row['fname']  
    ];

}
echo json_encode($data);
?>