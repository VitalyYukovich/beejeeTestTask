<?php
session_start();
if ($_SESSION['auth'] && $_SESSION['user_id'] == 1) {
	echo json_encode(array('result' => 'success'));
	exit;
}
echo json_encode(array('result' => 'error'));
