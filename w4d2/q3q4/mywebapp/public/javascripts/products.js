
$(() => {
    $('.addtocart').click((evt) => {
        console.log('addtocart clicked.....');
       
        let prodId = $(evt.currentTarget).prop("id");

        // console.log('this: ', $(evt.currentTarget));
        // console.log('prodId prop: ', $(evt.currentTarget).prop("prodid"));
        // console.log('prodId attr: ', $(evt.currentTarget).attr("prodid"));

        const formData = {prodId: prodId };
       
        //using AJAX API
        $.post({
            url: '/addtocart',
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8"
        })
        .done((res)=>{
            $('#statusmsg').text( "Successfully added. count: "+ res.count);
        })
        .fail(()=>{
            $('#statusmsg').text('FAILED!!!!!!!!!!');
        });

        // fetch('/addtocart', {
        //     method:'POST',
        //     body: JSON.stringify(formData),
        //     contentType: "application/json; charset=utf-8"
        // })
        // .then(res => {
        //     //console.log(res);
        //     res.json();
        // })
        // .then(data => {
        //     $('#statusmsg').text( "Successfully added. count: "+ data.count);
        // })
        // .catch(data => {
        //     $('#statusmsg').text('FAILED!!!!!!!!!!');
        // });
    });

});