$(document).on('scroll', function() {
  
  var pixelsFromTop = $(document).scrollTop()
  
  
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  
  var difference = documentHeight - windowHeight
  
  var percentage = 100 * pixelsFromTop / difference
 
  $('.bar').css('width', percentage + '%')
  
})

//Get the button:
returnbutton = document.getElementById("return-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && document.body.clientWidth > 640)
  {
    returnbutton.style.display = "block";
  } else {
    returnbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({
  top: 0, 
  behavior: 'smooth'
});
}

