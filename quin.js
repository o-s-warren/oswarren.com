$('.show-quin-abstract').on('click', function() {

if ($('.quin-abstract').is(':hidden')) {
  $('.quin-abstract').slideDown()
 } else {
     $('.quin-abstract').slideUp()
    }

  return false
  
})