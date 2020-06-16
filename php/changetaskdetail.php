<?php
include 'database_connection.php';

$editTaskDetail = htmlspecialchars(trim($_POST['editTaskDetail']));
$taskId = htmlspecialchars(trim($_POST['taskId']));

if ($_SESSION['auth'] && $_SESSION['user_id'] == '1') {
	$queryCheckDetail = 'SELECT task_detail FROM task_list WHERE task_id = ?';
	$statementCheckDetail = $connect->prepare($queryCheckDetail);
	$statementCheckDetail->execute(array($taskId));
	$item = $statementCheckDetail->fetch();
	if (strcmp($item['task_detail'], $editTaskDetail)) {
		$query = 'UPDATE task_list SET task_detail = ?, task_edit = 1 WHERE task_id = ?';
		$statement = $connect->prepare($query);
		$data = array($editTaskDetail, $taskId);
		$statement->execute($data);
		echo json_encode(array('result' => 'success', 'message' => 'Вы изменили описание задачи #' . $taskId . '.'));
		exit;
	}
	echo json_encode(array('result' => 'error', 'code' => 555, 'message' => 'Описание задачи #' . $taskId . ' не было изменено.'));
	exit;
} else {
	echo json_encode(array('result' => 'error', 'code' => 403, 'message' => "Ошибка доступа."));
	exit;
}
?>