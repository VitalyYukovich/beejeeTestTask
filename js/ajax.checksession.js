$(document).ready(function() {
    $.ajax({
		url: '../php/checkaccess.php',
		method: 'GET',
		success: function(data){
			let dataParse = jQuery.parseJSON(data);
			if(dataParse.result == 'success'){
				$('#authBlock').html('<a class ="btn btn-secondary" href="./php/unlogin.php" role="button">Выйти</a>');
			}
			if(dataParse.result == 'error'){
				$('#authBlock').html('<a class="btn btn-primary" href="./login.html" role="button">Авторизироватся</a>');
			}
		}
	})
});