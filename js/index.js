const button = document.querySelectorAll('.button');
const btnToggle = document.querySelector('.button--toggle');
const btnFlag = document.querySelector('.button--flag');

// =========================== TOGGLE
btnToggle.addEventListener('click', function () {
    this.classList.toggle('button--press');
});

// =========================== FLAG
let flag = false;

btnFlag.addEventListener('click', function () {
    flag = !flag;

    if (flag) btnFlag.classList.add('button--press');
    else btnFlag.classList.remove('button--press');
});

// =========================== FOR
function change(arr, i) {
    arr.forEach((item) => {
        item.forEach((i) => {
            i.classList.remove("is-active");
        });
        item[i].classList.add("is-active");
    });
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        // change([button, items], i);
    });
}
