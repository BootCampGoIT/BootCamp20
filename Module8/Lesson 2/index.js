const third = document.querySelector('.third')
const sixth = document.querySelector('.sixth')


const getsomething = (intersectingElements, property) => {
    intersectingElements.forEach(element => {
        if (element.isIntersecting) {
            // console.log(element.target);
            // property.disconnect();
            element.target.style.backgroundColor = "blue"
        }
    });
}

console.dir(window)

const options = {
    root: null,
    rootMargin: '-50px',
    treshold: 1, //[0, 0.25, 0.5, 0.75, 1] 
}

const observer = new IntersectionObserver(getsomething, options);

observer.observe(third);
observer.observe(sixth);
