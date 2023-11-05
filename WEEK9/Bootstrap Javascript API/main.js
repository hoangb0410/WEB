$(document).ready(function(){
    $('.nav-tabs a').on('show.bs.tab', function(){
        if ($($(this).attr("href")).html() == "") {
            if ($(this).attr("href") == "#menu2") {
                $("#menu2").load("abc.html");
            } else if ($(this).attr("href") == "#menu3") {
                $("#menu3").load("def.html");
            }	
        }
    });
});