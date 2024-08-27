<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>
<body>
    <div id="pra7">
        <form action="" method="post" enctype="multipart/form-data">
            <textarea placeholder="Your Comment" name="comment" style="height:75px; width:90%; margin:10px"></textarea><br><br>
            <input type="file" name="file" accept="image/*"><br><br>
            <input type="submit" value="post" name="post" style="height:40px; width:60px; margin:40px 0px 0px 150px;">
        </form>
    </div>
</body>
</html>

<?php
if(isset($_POST['post'])){
    $file_name=$_FILES['file']['name'];
    $file_tmp=$_FILES['file']['tmp_name'];
    move_uploaded_file($file_tmp,"./files/".$file_name);
}
?> 

