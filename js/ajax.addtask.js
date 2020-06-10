$(document).ready(function() {
	$(document).on('submit', '#to_do_form', function(event) {
		event.preventDefault();

		if($('#user_name').val() == '' || $('#user_email').val() == '' || $('#task_detail').val() == ''){
			$('#message').html('<div class="alert alert-danger">Заполните все поля!</div>');
			return false;
		}else{
			$('submit').attr('disabled', 'disabled');
			$.ajax({
				url: '../php/addtask.php',
				method: 'POST',
				data: $(this).serialize(),
				success: function(data){
					$('submit').attr('disabled', false);
					$('#to_do_form')[0].reset();
					let parseData = jQuery.parseJSON(data);
					let prependData = '<tr><td>' + parseData[':user_name'] + '</td>';
					prependData += '<td>' + parseData[':user_email'] + '</td>';
					prependData += '<td>' + parseData[':task_detail'] + '</td>';
					prependData += '<td>Не выполнено</td></tr>';

					$('#list_task>tbody').prepend(prependData);

				}
			})
			
		}
	});
});