// greet the people
console.log("Oh hello, explorer. 👋");

// Hide the nav
var menu = $('.menu-content');
    $(menu).hide();
    $( ".menu" ).click(function() {
        $( ".menu-content" ).slideToggle( 150 );
    });

window.onload = function() { document.getElementById('menu').style.display = 'none'; };


// Resize the window, I dare ya :)

var resizeCount = 0; // Set reset count initially 0

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd'); // When they stop resizing plz
        resizeCount++; // Take note and add one to resizeCount
        // console.log(resizeCount);
    }, 500);

});

// If they've resized the window, they'll see a message
$(window).on('resizeEnd', function() {
    if (resizeCount == 1) { // Increase this number if you want to make 'em work for it
        console.log("Oh yeah, it's responsive. 😎");
        console.log("Curious? Email me: christopherazar@gmail.com");
    } else if (resizeCount >= 5) {
        console.log("Super fun, right?");
        $(this).off(); // That's all folks
    } else {}

});

// Show / Hide IDEO div based on URL parameter sent through email
// if(location.search == "?hello=ideo"){
//   $('#hello-ideo').show();
// }
// else {
//   $('#hello-ideo').hide();
// }
