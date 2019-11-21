$(function() {
    let manage = $('#ajax')
    let new1 = $('#new')
    let add = $('#add')
    let visitor = $('#visitor')
    let add_visitor = $('#add_visitor')
    add.click(function() {
        let value = new1.val();
        $.post('/route', { task: value }, function() {

        })
    })

    // Incomplete fnction
    add_visitor.click(function() {
        let value = visitor.val();
        console.log(value);
        $.post('/check', { task: value }, function() {

        })
    })


    $.get('/route/', function(data) {
        for (i of data) {
            manage.append('<tr><td> ' + i.id + '</td><td> ' + i.name + '</td><td>' + i.email + '</td><td>' + i.Ph_no + '</td></tr>');
        }
    })
})