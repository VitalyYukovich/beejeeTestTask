<!DOCTYPE html>
<html>
	<head>
		<title>BeeJee Test Task</title>
		<meta charset="utf-8">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  		<script src = "./js/ajax.addtask.js"></script>
  		<script src = "./js/ajax.getlisttask.js"></script>
  		<script src = "./js/ajax.pagination.js"></script>
  		<script src = "./js/ajax.sort.js"></script>
	</head>
	<body>
		<div class="container">
			<h1 align="center">BeeJee Test Task</h1>
			<div align="center">
				<a class="btn btn-primary" href="./login.html" role="button">Авторизироватся</a>
			</div>
			<br />
			<div class="panel panel-default">
			    <div class="panel-heading">
				    <div class="row">
					    <div class="col-md-10">
				       		<h3 class="panel-title">BeeJee To-Do List</h3>
				      	</div>
				    </div>
			    </div>
				<div class="panel-body">
					<form method='post' id='to_do_form'>
						<span id="message"></span>
						<div class="form-group">
						  	<label>Имя</label>
	    					<input type="text" name="user_name" id="user_name" class="form-control" placeholder="Введите имя">
						</div>
	    				<div class="form-group">
	    					<label>Email</label>
	    					<input type="email" name="user_email" id="user_email" class="form-control" placeholder="Введите email">
	    				</div>
    					<div class="form-group">
					    	<label>Описание задачи</label>
					    	<textarea class="form-control" name="task_detail" id="task_detail" rows="4" placeholder="Введите описание задачи"></textarea>
						</div>
						<button type="submit" name="submit" id="submit"class="btn btn-primary">Добавить задачу</button>
					</form>

					<br />
					<table class = 'table table-hover' id='list_task'>
						<thead>
							<tr>
								<th id='captionName'>Имя</th>
								<th id='captionEmail'>Email</th>
								<th>Описание задачи</th>
								<th id='captionStatus'>Статус задачи</th>
							</tr>
						</thead>
						<tbody>

						</tbody>
					</table>
					<nav>
						<ul class="pagination">
						</ul>
					</nav>
				</div>
			</div>
		</div>
 </body>
</html>