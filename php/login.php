<?php
if ($_POST['login'] && $_POST['password']) {
	if (!strcmp($_POST['login'], 'admin') && !strcmp($_POST['password'], '123')) {
		$_SESSION['user_id'] = 1;
		echo $_SESSION['user_id'];
	} else {
		echo 'Неверные реквезиты доступа';
	}
} else {
	echo 'Поля обязательны для заполнения';
}
?>