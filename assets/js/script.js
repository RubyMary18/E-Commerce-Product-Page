//lightbox start
let heroImage = document.querySelector('.hero-image img');
let thumbNail = document.querySelectorAll('.image-thumbnail-container li');
let thumbNailImg = document.querySelectorAll('.image-thumbnail-container li img');
let heroImgContainer = document.querySelector('.hero-image');
let modalBox = document.querySelector('.modal-box');
let modalImg = document.querySelector('.hero-image-container figure img');

let modalThumbNail = document.querySelectorAll('.modal-thumbnail-container li');
let modalThumbNailImg = document.querySelectorAll('.modal-thumbnail-container li img');

let closeBtn = document.querySelector('.close-icon span');


let previous = document.querySelector('.indicator .previous-icon');
let next = document.querySelector('.indicator .next-icon');
let modalPrevious = document.querySelector('.modal-indicator .previous-icon');
let modalNext = document.querySelector('.modal-indicator .next-icon');

var currentImg = 1;

function openMenu() {
    modalBox.classList.add('show');
}

function closeMenu() {
    modalBox.classList.remove('show');
}

function removeActiveImgList() {
    thumbNail.forEach(thumb => {
        thumb.classList.remove('active-img-list')
    })
}

function removeActiveImg() {
    thumbNailImg.forEach(thumb => {
        thumb.classList.remove('active-image')
    })
}

function removeModalActiveImgList() {
    modalThumbNail.forEach(thumb => {
        thumb.classList.remove('active-img-list')
    })
}

function removeModalActiveImg() {
    modalThumbNailImg.forEach(thumb => {
        thumb.classList.remove('active-image')
    })
}

function nextImg() {
    if (currentImg == 4) {
        currentImg = 1;
    } else {
        ++currentImg;
    }

    modalImg.src = `./assets/images/image-product-${currentImg}.jpg`;
    heroImage.src = `./assets/images/image-product-${currentImg}.jpg`;

    removeActiveImgList();
    thumbNail[`${currentImg - 1}`].classList.add('active-img-list');
    removeActiveImg();
    thumbNailImg[`${currentImg - 1}`].classList.add('active-image');
    removeModalActiveImgList();
    modalThumbNail[`${currentImg - 1}`].classList.add('active-img-list');
    removeModalActiveImg();
    modalThumbNailImg[`${currentImg - 1}`].classList.add('active-image');
}

function previousImg() {
    if (currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }

    modalImg.src = `./assets/images/image-product-${currentImg}.jpg`;
    heroImage.src = `./assets/images/image-product-${currentImg}.jpg`;

    removeActiveImgList();
    thumbNail[`${currentImg - 1}`].classList.add('active-img-list');
    removeActiveImg();
    thumbNailImg[`${currentImg - 1}`].classList.add('active-image');
    removeModalActiveImgList();
    modalThumbNail[`${currentImg - 1}`].classList.add('active-img-list');
    removeModalActiveImg();
    modalThumbNailImg[`${currentImg - 1}`].classList.add('active-image');
}


//invoke functions
closeBtn.addEventListener('click', closeMenu);
heroImgContainer.addEventListener('click', openMenu);
modalNext.addEventListener('click', nextImg);
modalPrevious.addEventListener('click', previousImg);
next.addEventListener('click', nextImg);
previous.addEventListener('click', previousImg);


thumbNail.forEach((image, ind) => {

    image.addEventListener('click', () => {

        heroImage.src = `./assets/images/image-product-${ind + 1}.jpg`;

        thumbNail.forEach(thumb => {
            thumb.classList.remove('active-img-list')
        })

        thumbNailImg.forEach(imgLi => {
            imgLi.classList.remove('active-image');
        })

        image.classList.add('active-img-list');
        image.querySelector('img').classList.add('active-image');

        currentImg = `${ind + 1}`;


    })
})

heroImage.addEventListener('click', () => {
    modalImg.src = heroImage.src;

    modalThumbNail.forEach(thumb => {
        thumb.classList.remove('active-img-list')
    })

    modalThumbNailImg.forEach(imgLi => {
        imgLi.classList.remove('active-image');
    })

    modalThumbNail[`${currentImg - 1}`].classList.add('active-img-list');
    modalThumbNailImg[`${currentImg - 1}`].classList.add('active-image');

    modalThumbNail.forEach((image, ind) => {

        image.addEventListener('click', () => {

            modalImg.src = `./assets/images/image-product-${ind + 1}.jpg`;
            heroImage.src = modalImg.src;
            currentImg = `${ind}`;

            removeModalActiveImgList();
            removeModalActiveImg();

            image.classList.add('active-img-list');
            image.querySelector('img').classList.add('active-image');

            removeActiveImgList();
            removeActiveImg();

            thumbNail[`${currentImg}`].classList.add('active-img-list');
            thumbNailImg[`${currentImg}`].classList.add('active-image');

            currentImg = `${ind + 1}`;
        })
    })

})
//lightbox end


//cart functionality start
let increment = document.querySelector('.number-container .increment');
let decrement = document.querySelector('.number-container .decrement');
let display = document.querySelector('.number-container .number-display');
let orderNumber = document.querySelector('.order-number');
let cart = document.querySelector('.cart');
let cartBasket = document.querySelector('.cart-basket');
let productInfo = document.querySelector('.product-info');
let productEmpty = document.querySelector('.product-info-para');

let addCartBtn = document.querySelector('.cart-box');

var initial = 0;

function hide() {
    orderNumber.classList.add('hide');
}

hide();

function removeHide() {
    orderNumber.classList.remove('hide');
}

function changeColor() {
    if(addCartBtn.classList.contains('change-color')) {
        addCartBtn.classList.remove('change-color');
    }
}

increment.addEventListener('click', () => {
    changeColor()
    initial++;
    numberOfOrder();
})

decrement.addEventListener('click', () => {
    changeColor()
    initial--;
    if (initial < 0) {
        initial = 0;
    }
    numberOfOrder();
})

console.log(initial);

function numberOfOrder() {
    display.innerHTML = initial;
}

function cartInfo() {
    cartBasket.classList.toggle('hide');
}

cart.addEventListener('click', () => {
    cartInfo();
})

addCartBtn.addEventListener('click', () => {
    addCartBtn.classList.add('change-color');
    removeHide();
    orderNumber.classList.add('dis');
    orderNumber.innerHTML = `${initial}`;

    if (initial == 0) {
        orderNumber.classList.add('hide');
    } else {
        cartDisplay();
    }
})

function cartDisplay() {
    var output = "";
    var totalPrice = initial * 125;

    productEmpty.classList.add('hide');

    if (productInfo.classList.contains('hide')) {
        productInfo.classList.remove('hide');
    }

    output += `<div class="product-info-box">
            <div class="product-details">
              <figure>
                <img
                  src="./assets/images/image-product-1-thumbnail.jpg"
                  alt="Product 1"
                />
              </figure>
              <p>
                Fall Limited Edition Sneakers <br />
                <span class="cart-product-price">$125.00</span>
                <img src="./assets/images/icon-close.svg" alt="" />
                <span class="total-no">${initial}</span>
                <span class="total-price">&#36;${totalPrice}</span>
              </p>
              <figure>
                <img
                  class="delete-icon"
                  src="./assets/images/icon-delete.svg"
                  alt="Delete Icon"
                />
              </figure>
            </div>
            <button class="checkout-btn">Checkout</button>
          </div>`;
    productInfo.innerHTML = output;

    let deleteIcon = document.querySelector('.delete-icon');

    deleteIcon.addEventListener('click', () => {
        productInfo.classList.add('hide');
        productEmpty.classList.remove('hide');

        initial = 0;
        display.innerHTML = `${initial}`;
        orderNumber.classList.add('hide');
    })
}
//cart functionality end

//Mobile menu
let menuIcon = document.querySelector('.mobile-menu');
let menuList = document.querySelector('.left-nav .left-nav-list');
let leftNav = document.querySelector('.left-nav');
console.log(menuIcon);

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('show');
})

menuIcon.addEventListener('click', () => {
    menuList.classList.add('active');
})