// Hide the nav
var menu = $('.menu-content');
    $(menu).hide();
    $( ".menu" ).click(function() {
        $( ".menu-content" ).slideToggle( 150 );
    });

window.onload = function() { document.getElementById('menu').style.display = 'none'; };


// Resize easter egg
// Resize the window, I dare ya :)
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

$(window).on('resizeEnd', function() {
    console.log("Oh yeah, it's responsive. 😎");
    console.log("Curious? Email me: christopherazar@gmail.com");
    $(this).off();
});
