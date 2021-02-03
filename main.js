$('.show-quin-abstract').on('click', function() {

if ($('.quin-abstract').is(':hidden')) {
  $('.quin-abstract').slideDown()
  $('.show-quin-abstract').text('Abstract (Hide)')
 } else {
     $('.quin-abstract').slideUp()
  $('.show-quin-abstract').text('Abstract (Show)')
    }

  return false
  
})