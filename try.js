let items = document.querySelectorAll('.slider  .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param

let countItem = items.length;
let itemActive = 0;

//even next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >=countItem){
        itemActive = 0;
    }
    showSlider();
}
//prev button
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;   
    }
    showSlider();
}
//autoslider
let refreshInterval = setInterval(() => {
   next.click(); 
}, 3000)
function showSlider(){
    //remove item active old 
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

//  active new item
items[itemActive].classList.add('active');
thumbnails[itemActive].classList.add('active');

// Clear auto time run slider
clearInterval(refreshInterval);
refreshInterval = setInterval(() =>{
    next.click();
}, 5000)
}



//click thumbnail
  thumbnails.forEach(() => {
    thumbnail.addEventListener('click', () => {
     itemActive = index;
        showSlider();
    })
  })