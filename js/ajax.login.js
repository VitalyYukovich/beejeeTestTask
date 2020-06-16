$(document).ready(function() {
    $(document).on('submit', '#login', function(event){
    	event.preventDefault();
        $.ajax({
			url: '../php/login.php',
			method: 'POST',
			data: $(this).serialize(),
			success: function(data){
				let dataParse = jQuery.parseJSON(data);
				if(dataParse.result=='success'){
					document.location.href="../index.html";
				}
				if(dataParse.result == 'error'){
					$('#message').html(dataParse.message);
				}
			}
		})
    });

});