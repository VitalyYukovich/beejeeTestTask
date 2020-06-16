<?
include 'database_connection.php';
include 'function.php';

$countOfPage =  $_GET['countOfPage'];
$numberPage = $_GET['numberPage'];

if(isset($_SESSION['columnSorted']) && isset($_SESSION['ruleSorted']))
	$result = getlist($connect, $_SESSION['columnSorted'], $_SESSION['ruleSorted']);
else
	$result = getlist($connect);

if($result == null)
	$response['listTask'] = array();
else
	$response['listTask'] = array_slice($result, $countOfPage*($numberPage-1), $countOfPage, TRUE);
echo json_encode($response);
?>
