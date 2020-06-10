<?
include 'database_connection.php';

$columnSorted = isset($_SESSION['columnSorted'])? $_SESSION['columnSorted']:'task_id';
$ruleSorted = isset($_SESSION['ruleSorted'])? $_SESSION['ruleSorted']:'DESC';

$countOnPage = 3;
$numPage = $_GET['numPage'];
$query = "
	SELECT * FROM task_list
	ORDER BY " . $columnSorted . " " . $ruleSorted;

$statement = $connect->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
$response['countPage'] = ceil(count($result)/$countOnPage);
$response['listTask'] = array_reverse(array_slice($result, $countOnPage*($numPage-1), $countOnPage));
echo json_encode($response);

?>