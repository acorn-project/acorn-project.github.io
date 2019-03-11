(function() {
  var delay, slideUp;

  delay = function(ms, func) {
    return setTimeout(func, ms);
  };

  slideUp = {
    distance: '10%',
    origin: 'bottom',
    viewFactor: 0.5,
    duration: 600
  };

  window.sr = ScrollReveal();

  sr.reveal('.main-video', slideUp);

}).call(this);
