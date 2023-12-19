let text = document.getElementById('text');
let 2 = document.getElementById('2');
let 4 = document.getElementById('4');
let 5 = document.getElementById('5');

window.addEventListener('scroll', () => {
    let value =window.scrollY;

    text.style.marginTop = value*1.5+'px';
    2.style.right = value*1+'px';
    4.style.right = value*-1+'px';
    5.style.left = value*-1+'px';

})
