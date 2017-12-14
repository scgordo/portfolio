$('.expander').click(function() {
  var $ssContent = $(this).next();
  $ssContent.slideToggle('fast');
})
