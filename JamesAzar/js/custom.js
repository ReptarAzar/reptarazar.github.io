/*
Fancy Resume / CV
Created: 02/02/2010
By: Catalin Pinte
Contact Info: pinte_catalin@yahoo.com
*/
$(document).ready(function(){

     $(".controls li").not('#tooltip').hover(
          function () {
		      clearTimeout($query);
			  if($elem.attr("class") === 'active'){
				  $elem.clearQueue().animate({'left': ($(this).position().left - 38 ) + 'px'}, 300);
				  $elem.text($(this).attr('title'));
			  }
			  if ($elem.attr("class") === 'inactive'){
				  $elem.css({'left':  ($(this).position().left - 38 )+ 'px'}).css({'top': ($(this).position().top + 40)  + 'px'}).fadeIn("slow").attr('class','active');
				  $elem.html($(this).attr('title'));
		      }

         },
		 function () {
			 $query = setTimeout( function(){ $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); }); } ,500);
		}
    );

    $(".controls li a").click(function(){
	     $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); });
	});

	$(".controls li a#print").click(function(){
	     $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); });
		 window.print();
		 return false;
	});


	$('#middle-content ul.list>li:nth-child(even)').not('.arrow-up').css({ 'background': '#e6e6e6'});
	$('#middle-content ul.list>li:nth-child(odd)').not('.arrow-up').css({ 'background': '#f6f6f6'});
	$('#middle-content ul.list:last-child').css({'margin-bottom':'0'});

});
