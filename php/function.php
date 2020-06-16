<?
function getlist($connect, $columnSorted ='task_id', $ruleSorted ='DESC'){
	$query = "SELECT * FROM task_list
	ORDER BY " . $columnSorted . " " . $ruleSorted;
	$statement = $connect->prepare($query);
	$statement->execute();
	while($item = $statement->fetch()){
		$result[] = $item;
	}
	return $result;
}