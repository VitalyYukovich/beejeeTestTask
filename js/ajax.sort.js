$(document).ready(function() {
    $(document).on('click', '#list_task>thead>tr>th', function(event){
    	event.preventDefault();
    	let captionColumnSorted = $(this)[0].id;
    	let currentPage = $('li.page-item.active').text();
        if(captionColumnSorted){
        	$.ajax({
				url: '../php/sortlisttask.php',
				method: 'GET',
				data: {'captionColumnSorted' : captionColumnSorted},
				success: function(data){
					ajaxGetList(currentPage, 3);
				}
			})
        }
    });

});