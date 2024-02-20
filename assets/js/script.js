let heroImage = document.querySelector('.hero-image img');
let thumbNail = document.querySelectorAll('.image-thumbnail-container li');

console.log(thumbNail);

window.onload = () => {
    for (let i=0; i<thumbNail.length; i++){
        thumbNail[i].onclick = () => {
            let currentImgUrl = thumbNail[i].querySelector('img').src;
            heroImage.src = currentImgUrl;
        }
    }
}
