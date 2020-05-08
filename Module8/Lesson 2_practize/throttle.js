

const button = document.querySelector(".throt");
``
let clickCount = 0;
let clickCountThrottled = 0;

function func(e) {
    clickCountThrottled += 1;
    console.log('clickCountThrottled :', clickCountThrottled);
}

// button.addEventListener('click', func);
button.addEventListener('click', _.throttle(func, 1000));

button.addEventListener('click', (e) => {
    clickCount += 1;
    console.log('clickCount :', clickCount);
    e.target.classList.toggle('activeButton')
})