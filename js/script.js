



// -----------BUTTON-------------

// $(".button").css({
//     // 'font-size' : '25px',
//     'display' : 'block',
//     'left': '420px',
//     'top' : '45px',
//     'position' : 'relative',
//     'text-transform': 'uppercase',
//     'height': '100%',
//     // 'font-size': '25px',
//     'font-weight': '700',
//     'margin': '10px',
//     'line-height': '98px',
//     'width': '100px',
//     'height':' 100px',
//     'border-radius': '50%',
//     // 'border': '4px solid #FF1820',
//     'text-align': 'center',
//     'text-decoration': 'none',
//     'box-shadow': '1px 1px 10px rgba(0,0,0,.4)',
//     'background-color': '#3A61E2',
//     // 'color': '#E0EA00',
//     'transition':' all 0.5s ease',
//     });









// -----------LOGO------------

dynamics.animate(document.getElementById("logo"),  {
  translateX: 350
}, {
  type: dynamics.forceWithGravity,
  duration: 3055,
  bounciness: 609,
  elasticity: 485,
  returnsToSelf: true
});

document.classList.toggle('class');


// --------MENU----------

dynamics.animate(document.querySelector('menu'),  {
  translateX: 250
}, {
  type: dynamics.spring,
  duration: 3687,
  frequency: 624,
  friction: 264,
  anticipationSize: 247,
  anticipationStrength: 191
});


$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});



