<?php
$captionColumnSorted = $_GET['captionColumnSorted'];
$arrColumn = [
	'captionName' => 'user_name',
	'captionEmail' => 'user_email',
	'captionStatus' => 'task_status',
];
session_start();

if ($_SESSION['columnSorted'] == $arrColumn[$captionColumnSorted]) {
	if ($_SESSION['ruleSorted'] == 'ASC' || !isset($_SESSION['ruleSorted'])) {
		$_SESSION['ruleSorted'] = 'DESC';
	} else {
		$_SESSION['ruleSorted'] = 'ASC';
	}

} else {
	$_SESSION['ruleSorted'] = 'DESC';
	$_SESSION['columnSorted'] = $arrColumn[$captionColumnSorted];
}
echo json_encode($_SESSION);
?>