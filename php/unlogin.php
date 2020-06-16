<?php
session_start();
unset($_SESSION['auth']);
unset($_SESSION['user_id']);
header('Location: ../index.html');
?>