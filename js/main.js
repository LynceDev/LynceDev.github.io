window.sr = ScrollReveal({
  reset: false,
  mobile: false,
  duration: 500,
  delay: 300,
  easing: 'ease-in-out',
  viewFactor: 0.4
});

sr.reveal('.box1');

var fixed = false;
$(document).scroll(function() {
  if ($(this).scrollTop() > 250) {
      if (!fixed) {
          fixed = true;
          // $('#to-top').css({position:'fixed', display:'block'});
          $('#to-top').show("slow", function() {
              $('#to-top').css({
                  position: 'fixed',
                  display: 'block'
              });
          });
      }
  } else {
      if (fixed) {
          fixed = false;
          $('#to-top').hide("slow", function() {
              $('#to-top').css({
                  display: 'none'
              });
          });
      }
  }
});
