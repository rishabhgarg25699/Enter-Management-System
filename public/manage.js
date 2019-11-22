$(function() {
    let manage = $('#ajax')
    let new1 = $('#new')
    let add = $('#add')
    let visitor = $('#visitor')
    let add_visitor = $('#add_visitor')
    let visitor_output = $('#visitor_output')
    let employee_output = $('#employee_output')

    add.click(function() {
        let value = new1.val();
        $.post('/route', { task: value }, function(temp) {
            if (temp == 1)
                employee_output.text("Ho gayi attendence");
            else
                employee_output.text("Abe chutia hai kya. Ho gayi attaendence");
        })
        setInterval('location.reload()', 500);
    })

    add_visitor.click(function() {
        let value = visitor.val();
        $.post('/check', { task: value }, function(ret) {
            if (ret == 1)
                visitor_output.text("You can go");
            else
                visitor_output.text("Employee is absent today. No entry for you");
        })
        setInterval('location.reload()', 500);
    })


    $.get('/route/', function(data) {
        for (i of data) {
            manage.append('<tr><td> ' + i.id + '</td><td> ' + i.name + '</td><td>' + i.email + '</td><td>' + i.Ph_no + '</td></tr>');
        }
    })
})