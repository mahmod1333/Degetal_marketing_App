AOS.init();
$("#HOME").click(function() {
    $('html, body').animate({
        scrollTop: $("#banner").offset().top
    }, 1000);
});

$("#SERVICES").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
});



$("#ABUOT").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
}); 

$("#TESTIMONISLS").click(function() {
    $('html, body').animate({
        scrollTop: $(".testm").offset().top
    }, 1000);
});

$("#CONSTACT").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact-us").offset().top
    }, 1000);
});