

let header = document.querySelector('.header')

var lastScroll = 0;

window.addEventListener("scroll", function(){
  var currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll) {
    header.classList.add('bg-color');

  } else {
    header.classList.remove('bg-color')

  }
});
     
