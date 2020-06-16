<?php
session_start();
if ($_POST['login'] && $_POST['password']) {
	if (!strcmp($_POST['login'], 'admin') && !strcmp($_POST['password'], '123')) {
		$_SESSION['auth'] = true;
		$_SESSION['user_id'] = 1;
		echo json_encode(array('result' => 'success', 'message' => 'Вы успешно авторизировались!'));
		exit;
	} else {
		$messageError = 'Неверные реквезиты доступа.';
	}

} else {
	$messageError = 'Все поля обязательны для заполнения.';
}

echo json_encode(array('result' => 'error', 'message' => $messageError));
?>