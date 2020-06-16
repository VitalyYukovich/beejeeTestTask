<?php
include 'database_connection.php';

$task_id = $_GET['idTaskChangeStatus'];
if ($_SESSION['auth'] && $_SESSION['user_id'] == '1') {
	$query = 'UPDATE task_list SET task_status = 1 WHERE task_id = ?';
	$statement = $connect->prepare($query);
	$statement->execute(array($task_id));

	echo json_encode(array('result' => 'success', 'message' => 'Вы изменили статут задачи #' . $task_id));
	exit;
}
echo json_encode(array('result' => 'error', 'message' => "Вам нельзя изменять статут задач."));
?>