let divScroll = document.querySelector('.others-review')
let forward = document.querySelector('.next')
let back = document.querySelector('.prev')

forward.addEventListener('click' , function(){
    divScroll.scrollBy(500 , 0)
})
back.addEventListener('click' , function(){
    divScroll.scrollBy(-500 , 0)
})
