$(document).ready(function() {
    $(document).on('click', '#list_task>tbody>tr>td>span.pencil', function(event){
        let clickedTD = this;
        let taskDetail = $(clickedTD.closest('td')).text();
        let taskId = clickedTD.closest('tr').id;
        $('#editTaskDetaikModal').modal('show');
        $('#editTaskDetail').val(taskDetail);
        $('#editTaskDetail').attr('data-taskid', taskId);
    });
    $(document).on('click', '#submitEditTaskDetail', function(event){
        let editTaskDetail = $('#editTaskDetail').val();
        let taskId =  $('#editTaskDetail').attr('data-taskid');

        $.ajax({
            url: '../php/changetaskdetail.php',
            method: 'POST',
            data: {editTaskDetail: editTaskDetail, taskId: taskId},
            success: function(data){
                let dataParse = jQuery.parseJSON(data);
                if(dataParse.result == 'success'){
                    $('#editTaskDetaikModal').modal('hide');
                    $('tr#'+taskId+'>td.taskDetail').html(editTaskDetail + ' <span class="pencil">' + getSvgPencil(true) + '</span>');
                    $('tr#'+taskId+'>td.isEditTaskDetail').html(getSvgEditTask(1));
                }
                if(dataParse.result == 'error' && dataParse.code == '555'){
                    $('#editTaskDetaikModal').modal('hide');
                }
                if(dataParse.result == 'error' && dataParse.code == '403'){
                    document.location.href="./login.html";
                }
            }
        })
        
    });

});