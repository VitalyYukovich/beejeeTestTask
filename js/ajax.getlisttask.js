$(document).ready(function() {
	ajaxGetList();
});
function ajaxGetList(){
	$.ajax({
		url: '../php/getlisttask.php',
		method: 'GET',
		data: {'numPage': 1},
		success: function(data){
			let parseData = jQuery.parseJSON(data);
			let countPage = parseData['countPage'];
			$("#list_task>tbody").empty();
			parseData['listTask'].forEach(element => prependTable(element))
			$(".pagination").empty();
			for(i=1; i<=countPage; i++)
				$('.pagination').append('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>');
		}
	})
}
function prependTable(item){
	let taskStatus = item['task_status'] == 1?'Выполнено': 'Не выполнено';
	let prependData = '<tr><td>' + item['user_name'] + '</td>';
	prependData += '<td>' + item['user_email'] + '</td>';
	prependData += '<td>' + item['task_detail'] + '</td>';
	prependData += '<td>'+ taskStatus +'</td></tr>';

	$('#list_task>tbody').prepend(prependData);
}