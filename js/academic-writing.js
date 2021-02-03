$('.show-essays').on('click', function() {

if ($('.essays').is(':hidden')) {
  $('.essays').slideDown()
 } else {
     $('.essays').slideUp()
    }

  return false
  
})

$('.show-dissertations').on('click', function() {

if ($('.dissertations').is(':hidden')) {
  $('.dissertations').slideDown()
 } else {
     $('.dissertations').slideUp()
    }

  return false
  
})