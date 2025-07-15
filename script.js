const imgs=[
    'Images/1.png',
    'Images/2.png',
    'Images/3.png',
    'Images/2.png',
];

let currentIndex =0;

function updateImages(){
    const mainImg  = document.getElementById('main-img');
    const prevImg  = document.getElementById('prev-img');
    const nextImg  = document.getElementById('next-img');

    mainImg.style.backgroundImage = `url(${imgs[currentIndex]})`;
    prevImg.style.backgroundImage = `url(${imgs[(currentIndex - 1 + imgs.length) %imgs.length]})`;
    nextImg.style.backgroundImage = `url(${imgs[(currentIndex + 1) % imgs.length]})`;
}

function prevImage(){
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateImages();
}

function nextImage(){
    currentIndex = (currentIndex + 1) % imgs.length;
    updateImages();
}

window.onload = updateImages;