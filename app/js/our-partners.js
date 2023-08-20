const scrollingList = document.querySelector('.scrolling-list');

scrollingList.innerHTML += scrollingList.innerHTML;

let offset = 0;
const scrollSpeed = 3;

function scroll() {
    offset += scrollSpeed;
    if (offset > scrollingList.offsetWidth / 2) {
        offset = 0;
    }
    scrollingList.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(scroll);
}

scroll();