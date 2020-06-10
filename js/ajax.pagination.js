$(document).ready(function() {
    $(document).on('click', '.page-link', function(event){
    	event.preventDefault();
        let numPage = $(this).text();
        $.ajax({
			url: '../php/getlisttask.php',
			method: 'GET',
			data: {'numPage' : numPage},
			success: function(data){
				let parseData = jQuery.parseJSON(data);
				$("#list_task>tbody").empty();
				parseData['listTask'].forEach(element => prependTable(element));

			}
		})
    });

});