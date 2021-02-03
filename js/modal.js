$('.modal-link a').on('click', function() {
    var currentImage = $(this).html()
  console.log(this)
  
  $('.modal-content').html(currentImage)
  $('.modal').fadeIn(500)
  return false
  

})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)
  return false
})