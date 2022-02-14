// dynamic navigation
let navigation = document.querySelector('nav');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navigation.classList.add('scroll');
    }
    else {
        navigation.classList.remove('scroll');
        navigation.style.transition = ".1s ease-in-out";
    }
}
// end dynamic navigation
