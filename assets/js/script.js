let heroImage = document.querySelector('.hero-image img');
let thumbNail = document.querySelectorAll('.image-thumbnail-container li');
let thumbNailImg = document.querySelectorAll('.image-thumbnail-container li img');
let heroImgContainer = document.querySelector('.hero-image');
let modalBox = document.querySelector('.modal-box');
let modalImg = document.querySelector('.hero-image-container figure img');

let modalThumbNail = document.querySelectorAll('.modal-thumbnail-container li');
let modalThumbNailImg = document.querySelectorAll('.modal-thumbnail-container li img');

let closeBtn = document.querySelector('.close-icon span');

console.log(heroImgContainer);

window.onload = () => {
    
    for (let i=0; i<thumbNail.length; i++){
        thumbNail[i].onclick = () => {
            thumbNail.forEach(li => {
                li.classList.remove('active-img-list');
            })
            thumbNailImg.forEach(imgLi => {
                imgLi.classList.remove('active-image');
            })
            let currentImgUrl = thumbNail[i].querySelector('img').src;
            heroImage.src = currentImgUrl;
            thumbNail[i].classList.add('active-img-list');
            thumbNailImg[i].classList.add('active-image');

            preview(currentImgUrl);         
        }

    }
    function preview(currentImgUrl) {
        heroImgContainer.onclick = () => {
            modalBox.classList.add('show');
            modalImg.src = currentImgUrl;

            for (let j=0; j<modalThumbNail.length; j++) {

                modalThumbNail[j].onclick = () => {
                    console.log("working");
                    modalThumbNail.forEach(li => {
                        li.classList.remove('active-img-list');
                    })

                    modalThumbNailImg.forEach(imgLi => {
                        imgLi.classList.remove('active-image');
                    })

                    let modalCurrentImgUrl = modalThumbNail[j].querySelector('img').src;
                    modalImg.src = modalCurrentImgUrl;
                    modalThumbNail[j].classList.add('active-img-list');
                    modalThumbNailImg[j].classList.add('active-image');
                }
            }

            closeBtn.addEventListener('click', function() {
                modalBox.classList.remove('show');
            })
        }
    }

    preview(heroImage.src);
}
