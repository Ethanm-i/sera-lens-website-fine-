const imgs=[
    'IMG/1.jpg',
    'IMG/2.jpg',
    'IMG/3.jpg',
    'IMG/4.jpg',
    'IMG/5.jpg',
    'IMG/6.jpg',
    'IMG/7.jpg',
    'IMG/8.jpg',
    'IMG/9.jpg',
    'IMG/10.jpg',
    'IMG/11.jpg',
    'IMG/12.jpg',
    'IMG/13.jpg',
    'IMG/14.jpg',
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

let autoplay = setInterval(nextImage, 3000);

document.querySelector('.slider').addEventListener('mouseenter', () =>{
    clearInterval(autoplay);
});

document.querySelector('.slider').addEventListener('mouseleave', () =>{
    autoplay = setInterval(nextImage, 3000);
});