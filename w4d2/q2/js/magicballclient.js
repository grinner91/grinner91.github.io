$(() => {
    $('#ask8ballbutton').click(() => {
        console.log('ask8ballbutton clicked.....');
        //using fetch API
        // fetch('/8ball')
        // .then(res => res.json())
        // .then(data => {
        //     $('#answer').text(data.answer);
        // })

        //using AJAX API
        $.get('/8ball')
        .done((res)=>{
            $('#question').text(res.answer);
        })
        .fail(()=>{
            $('#question').text('FAILED!!!!!!!!!!');
        });
    });

});