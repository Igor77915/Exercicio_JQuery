$(document).ready(function() {

    $('#form').submit(function(e) {
        e.preventDefault();
        var taskName = $('#input').val();
        if (taskName.trim() !== '') {
            $('#lista').append('<li>' + taskName + '</li>');
            $('#input').val('');
        }
    });

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
