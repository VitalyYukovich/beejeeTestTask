$(document).ready(function() {
	$(document).on('click', '.taskStatus', function(event) {
		let idTaskChangeStatus = this.closest('tr').id;
		$.ajax({
			url: '../php/changestatus.php',
			method: 'GET',
			data: {idTaskChangeStatus: idTaskChangeStatus},
			success: function(data){
				let dataParse = jQuery.parseJSON(data);
				if(dataParse.result=='success'){
					$('tr#'+idTaskChangeStatus+'>td.taskStatus').html(getSvgStatus(1));
				}
			}
		})
		
	});
});