
let scrollDiv = document.querySelector('.scrollx')
let next = document.querySelector('.forward')
let prev = document.querySelector('.back')

next.addEventListener('click' , function(){
    scrollDiv.scrollBy(335 , 0)
})
prev.addEventListener('click' , function(){
    scrollDiv.scrollBy(-335 , 0)
})