 function scrollMenu(direction) {
            container = document.getElementById('menuContainer');
            const scrollAmount = 300; // guilgeh hemjee
            
            if (direction === -1) {
                // zuunchee
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // baruunchaa
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
//Shop by brand
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");

const angle = 360 / images.length;
images.forEach((img, i) => {
  img.style.transform = `rotateY(${i * angle}deg) translateZ(350px)`;
});
