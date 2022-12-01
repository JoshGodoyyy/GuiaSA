<?php
header("Content-type: application/json; charset=utf-8");
require_once 'connection.php';

$sql = "select * from tb_generos";
$all_gender = $conn->query($sql);

$menus = [];
while($row = mysqli_fetch_assoc($all_gender)){
array_push($menus, $row);
}
echo json_encode($menus);
?>