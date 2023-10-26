(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        refs.closeModalBtn.classList.toggle("active-btn");
        refs.openModalBtn.classList.toggle("inactive-btn")
    }
})();


const time = 3000;
const step = 1;

function outNum(num, num2, elem1, elem2) {
    let e = document.querySelector(elem1);
    let d = document.querySelector(elem2);
    let n = 0;
    let m = 0;
    let t = Math.round(time / (num / step));
    let q = Math.round(time / (num2 / step));
    let interval1 = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval1);
        }
        e.innerHTML = n;
    }, t);

    let interval2 = setInterval(() => {
        m = m + step;
        if (m >= num2) {
            clearInterval(interval2);
        }
        d.innerHTML = m;
    }, q);
}

outNum(40, 8, ".benefits-item-num-1", ".benefits-item-num-2");