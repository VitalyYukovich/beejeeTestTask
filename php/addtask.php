<?php
include 'database_connection.php';

if ($_POST['user_name'] && $_POST['user_email'] && $_POST['task_detail']) {
	$data = [
		':user_name' => htmlspecialchars(trim($_POST['user_name'])),
		':user_email' => htmlspecialchars(trim($_POST['user_email'])),
		':task_detail' => htmlspecialchars(trim($_POST['task_detail'])),
	];

	$query = 'INSERT INTO task_list
		(user_name, user_email, task_detail)
		VALUES (:user_name, :user_email, :task_detail)';
}
$statement = $connect->prepare($query);
if ($statement->execute($data)) {
	echo json_encode($data);
}
?>