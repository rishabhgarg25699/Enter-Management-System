$(function() {
    let manage = $('#ajax')
    let new1 = $('#new')
    let add = $('#add')
    let visitor = $('#visitor')
    let add_visitor = $('#add_visitor')
    let visitor_output = $('#visitor_output')

    add.click(function() {
        let value = new1.val();
        $.post('/route', { task: value }, function() {

        })
    })

    add_visitor.click(function() {
        let value = visitor.val();
        console.log(value);
        $.post('/check', { task: value }, function(ret) {
            if (ret == 1)
                visitor_output.append("You can go");
            else
                visitor_output.append("Employee is absent today. No entry for you");
        })
    })


    $.get('/route/', function(data) {
        for (i of data) {
            manage.append('<tr><td> ' + i.id + '</td><td> ' + i.name + '</td><td>' + i.email + '</td><td>' + i.Ph_no + '</td></tr>');
        }
    })
})