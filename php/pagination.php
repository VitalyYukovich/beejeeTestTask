<?php
include 'database_connection.php';
include 'function.php';

$countOfPage = $_GET['countOfPage'];
$result = getlist($connect);

$response['countPage'] = ceil(count($result) / $countOfPage);
echo json_encode($response);
?>