var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$( document ).ready(function() {

    var touch = is_touch_device();
    function is_touch_device() {
        return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on ie10
        // 'ontouchstart' works on most browsers, 'onmsgesturechange works on ie10
    }
    if (touch === true) {
        $('.touch-device').css({
            'display': 'block'
        });
    } else {}

    counterReset();
});


function counterReset() {
    clicksCount = 0;
    $( "#counter" ).html( "0" );
}


function cursorNone() {
    document.body.style.cursor = "pointer";
}

// Fail!
$(document).on('click', function (e) {
   // console.log("fail!");
    document.body.style.cursor = "pointer";
    $('.fail-message').css({
        'display': 'block'
    });
    $('.play').css({
        'display': 'block'
    });
    $('.circle').css({
        'display': 'none'
    });
    $('.directions').css({
        'display': 'none'
    });
});

$(".play").on('click', function (e) {
    e.stopPropagation();
    counterReset();
    $('.bg').css({
        'cursor': 'none'
    });
   document.body.style.cursor = "none";
    $('#counter').css({
        'display': 'block'
    });
    $('.play').css({
        'display': 'none'
    });
    $('.circle').css({
          'display': 'block',
          'color': 'pink',
          'border-radius': '50%'
    });
    $('.fail-message').css({
        'display': 'none'
    });
    $('.directions').css({
        'display': 'none'
    });
});

$(".circle").on('click',function(e) {
    e.stopPropagation();
    var h = $(window).height();
    var w = $(window).width();
    var diameter = Math.floor(Math.random() * w);
    var top = Math.floor(Math.random() * (h - diameter));
    var left = Math.floor(Math.random() * (w- diameter));
    var c = getRandomColor();
      // console.log('screen width = ' + w);
      // console.log('screen height = ' + h);

      // console.log('circle diameter = ' + diameter);

    clicksCount += 1;
    $( "#counter" ).html( clicksCount );

    $(this).css({
    'left': left+'px',
    'top': top+'px',
    'height': diameter+'px',
    'width': diameter+'px',
    'background-color': c
 });
});


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
        return color;
}


}
/*
     FILE ARCHIVED ON 16:54:59 Mar 26, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:31:16 Oct 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2636.082
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.083
  cdx.remote: 0.056
  esindex: 0.006
  LoadShardBlock: 2609.785 (3)
  PetaboxLoader3.resolve: 3651.107 (5)
  PetaboxLoader3.datanode: 163.955 (5)
  load_resource: 1288.088 (2)
*/