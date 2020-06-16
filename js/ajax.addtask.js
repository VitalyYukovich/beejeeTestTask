$(document).ready(function() {
	$(document).on('submit', '#to_do_form', function(event) {
		event.preventDefault();
		if($('#user_name').val() == '' || $('#user_email').val() == '' || $('#task_detail').val() == ''){
			$('#message').html('<div class="alert alert-danger">Заполните все поля.</div>');
			return false;
		}
		let email = $('#user_email').val();
		let checkEmail = email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
		if(!checkEmail){
			$('#message').html('<div class="alert alert-danger">Неверный email.</div>');
			return false;
		}
		$('#message').html('');
		let currentPage = $('li.page-item.active').text();
		$('submit').attr('disabled', 'disabled');
		$.ajax({
			url: '../php/addtask.php',
			method: 'POST',
			data: $(this).serialize(),
			success: function(data){
				$('submit').attr('disabled', false);
				$('#to_do_form')[0].reset();
				ajaxGetList(currentPage, 3);
				$('#message').html('<div class="alert alert-success">Ваша задача добавлена!</div>');
				if($('tr').length>3){
					ajaxPagination(currentPage, 3);
				}
			}
		})
			
	});
});