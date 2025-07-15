const images = [
    'Images/1.png',
    'Images/2.png',
    'Images/3.png'
];

let index = 0;
const header = document.querySelector('.header-background');

function fadeToNextImage() {
    // Fade out
    //header.style.opacity = 1;

    setTimeout(() => {
        // Change image
        header.style.backgroundImage = `url(${images[index]})`;
        // Fade in
        //header.style.opacity = 4;

        // Next index
        index = (index + 1) % images.length;
    }, 1000); // Match the CSS transition time
}

// Initial image
header.style.backgroundImage = `url(${images[0]})`;

// Start slideshow every 5 seconds
setInterval(fadeToNextImage, 6000);

