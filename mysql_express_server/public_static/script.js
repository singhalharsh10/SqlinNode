$(function() {
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tabl_persons = $('#persons')

    function refreshPersonTable(persons) {
        tabl_persons.empty()
        tabl_persons.append(
            ` <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>

        </tr>`
        )
        for (person of persons) {
            tabl_persons.append(
                ` <tr>
            <th>${person.name}</th>
            <th>${person.age}</th>
            <th>${person.city}</th>

        </tr>
        `
            )
        }
    }


    $.get('/api/persons', function(data) {
        refreshPersonTable(data)
    })


    btn_submit.click(function() {
        // we are creating our API using api.js
        // console.log("HArsh Is a Good")
        // console.log(inp_name.val())
        // console.log(inp_age.val())
        // console.log(inp_city.val())
        $.post('/api/persons', {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        }, function(data) {
            refreshPersonTable(data)
        })
    })

})