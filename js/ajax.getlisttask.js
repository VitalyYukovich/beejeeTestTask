$(document).ready(function() {
	ajaxGetList(1,3);
	ajaxPagination(1, 3);
	$(document).on('click', '.page-link', function(event){
    	event.preventDefault();
    	$('.page-item').removeClass('active');
    	$(this).closest('li.page-item').addClass('active');
        let numberPage = $(this).text();
        ajaxGetList(numberPage,3);
    });
});
function ajaxGetList(numberPage, countOfPage){
	$.ajax({
		url: '../php/getlisttask.php',
		method: 'GET',
		data: {numberPage: numberPage, countOfPage: countOfPage},
		success: function(data){
			let parseData = jQuery.parseJSON(data);
			$("#list_task>tbody").empty();
			appendTable(parseData.listTask);
		}
	})
}
function appendTable(arrayData){
	let access = checkaccess();
	$.each(arrayData, function(index, item){
		let taskStatus = getSvgStatus(item['task_status']);
		let appendData = '<tr id=' + item['task_id'] + '><td>' + item['user_name'] + '</td>';
		appendData += '<td>' + item['user_email'] + '</td>';
		appendData += '<td class="taskDetail">' + item['task_detail'] + ' <span class="pencil">' + getSvgPencil(access) + '</span></td>';
		appendData += '<td class = "isEditTaskDetail">'+ getSvgEditTask(item['task_edit']) +'</td>';
		appendData += '<td class="taskStatus">'+ taskStatus +'</td></tr>';

		$('#list_task>tbody').append(appendData);
	});
}
function checkaccess(){
	let response = $.ajax({
        url: '../php/checkaccess.php',
        method: 'GET',
        async: false
    }).responseText;
    let responseParse = $.parseJSON(response);
    if(responseParse.result == 'success')
    	return true;
    return false;
}
function getSvgStatus(status){
	if(status==1)
		return '<svg class="bi bi-check-square" width="1em" height="1em" viewBox="0 0 16 16" fill="green" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>';
	else
		return '<svg class="bi bi-square" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>';
}
function getSvgEditTask(isEditTask){
	if(isEditTask==1){
		return '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="rgb(255, 224, 0)" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
	}
	return '';
}
function getSvgPencil(success){
	if(success)
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>';
	return '';
}
function ajaxPagination(currentPage, countOfPage){
	$.ajax({
		url: '../php/pagination.php',
		method: 'GET',
		data: {countOfPage: countOfPage},
		success: function(data){
			let parseData = jQuery.parseJSON(data);
			let countPage = parseData.countPage==0 ? 1: parseData.countPage; 
			$(".pagination").empty();
			for(i=1; i<=countPage; i++)
				$('.pagination').append('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>');
			$('li.page-item').eq(currentPage - 1).addClass('active');
		}
	})
}	