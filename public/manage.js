$(function() {
    let manage = $('#ajax');
    $.get('/route/', function(data) {

        console.log(data)
        for (i of data) {
            manage.append('<tr><td> ' + i.id + '</td><td> ' + i.name + '</td><td>' + i.email + '</td><td>' + i.Ph_no + '</td></tr>');
        }
    })
})