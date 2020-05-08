const options = {

}

function onObserve(props) {
    props.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            const arr = target.querySelectorAll('.title');
            arr.forEach(item => {
                item.classList.add('activeTitle')
            })
        };
        if (!isIntersecting) {
            const arr = target.querySelectorAll('.title');
            arr.forEach(item => {
                item.classList.remove('activeTitle')
            })
        };
    })
}


const observer = new IntersectionObserver(onObserve, options); 
//onObserve - массив вхождения, options


const mainBlock = document.querySelector('.mainBlock');

mainBlock.querySelectorAll('section')
    .forEach(section => {
        observer.observe(section)
    })

