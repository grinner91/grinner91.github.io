$(function(){

    const date  = new Date();
    const hours = date.hours;
    //day time 
    if(hours >= 6 && hours <= 18) {
        const css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "css/day.css"
        });
        $('head').append(css_link);
    } else {
        //night time 
        const css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "css/night.css"
        });
        $('head').append(css_link);
    }
});