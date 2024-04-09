const galleryPage = document.querySelectorAll('.galleryPage');
const array = Array.from(galleryPage);
const last = array.length - 1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightboxImage');
const lightButton = document.querySelectorAll(".lightboxButton");
const rightButton = document.querySelector('#right');
const leftButton = document.querySelector("#left");
let active;

const showLight = () => {lightboxContainer.classList.add('active')}

const hideLight = () => {
  lightboxContainer.classList.remove("active");
};

const setImage = (image) => {
  lightboxImage.src = image.dataset.imagesrc;
  active = array.indexOf(image);
};

const transitionLeft = () => {
    leftButton.focus();
    active === 0 ? setImage(array[last]) : setImage(array[active].previousElementSibling);
}

const transitionRight = () => {
    rightButton.focus();
    active === last
    ? setImage(array[0])
    : setImage(array[active].nextElementSibling);
}

const transitionHandle = (moveItem) => {
    moveItem.includes('left') ? transitionLeft() : transitionRight();
}


galleryPage.forEach (image => {
    image.addEventListener('click', (e) => {
        showLight()
        setImage(image)
    })
})

lightboxContainer.addEventListener('click', () => {hideLight()})

lightButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        transitionHandle(e.currentTarget.id);

    })
})


function displayInfo() {
document.querySelector("#time").innerHTML = new Date();
}