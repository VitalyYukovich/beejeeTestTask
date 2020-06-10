$(document).ready(function() {
    $(document).on('submit', '#login', function(event){
    	event.preventDefault();
        $.ajax({
			url: '../php/login.php',
			method: 'POST',
			data: $(this).serialize(),
			success: function(data){
				if(data==1){
					document.location.href="../index.php"
				}else{
					$('#message').html(data);
				}
			}
		})
    });

});