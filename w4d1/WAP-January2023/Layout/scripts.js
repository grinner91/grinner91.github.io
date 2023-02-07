$(() =>{ 
    let x = $('<p>', {
        id :'myP',
        text : 'The P Text',
        class : 'clicked'
    });
    $('#side').click(()=>{
        console.log("Clicked Side");
    });
    $('ul').click((e)=>{
        console.log("Clicked Untitled List");
        e.stopPropagation();
    });
    $('ul').click((e)=>{
        console.log("Clicked UL AGAIN!");
        e.stopImmediatePropagation();
    });
    $('#container').click(()=>{
        console.log("Clicked Container");
    });
    $('body').click(()=>{
        console.log("Clicked Body");
    });
    //$('#side').prepend(x);
    //$('#content > p').text("Whatever text that I want!").empty();
    //$('#b').val("This is the new button name").click(eventFunction).addClass('clicked').hide().show();
});

function eventFunction() { 
    alert("Function executed!");
    let x = document.getElementById('b').onclick = al;
}


//let timer = setInterval(armBomb, 3 * 1000, 15);
function al(){
    //let y = document.getElementById('thep').style = '<img src="https://m.media-amazon.com/images/I/71GEA5leEaL._CR412,0,1060,1060_UX256.jpg"></img>';
    document.getElementById('thep').className = "clicked";
   //clearInterval(timer);
   //alert("Phew!");
    alert("Button Clicked!");
   let x = document.getElementById('searchbox').value;
   let reged = /^([a-zA-Z0-9]{4,})+@+([a-zA-Z0-9]{2,})+(\.)+([a-zA-Z]{2,4})$/
   //console.log(reged.match(reged));
}

function armBomb(howlongdowehave){
    alert("Bomb armed! Exploding in: " + howlongdowehave + " seconds");
}






