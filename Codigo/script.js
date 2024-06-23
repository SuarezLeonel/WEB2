const colors = ['#303030', '#01662c', '#aa662b', '#274569', '#b23030', '#3a0000'];

function changeHeaderFooterColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('header').style.backgroundColor = randomColor;
    document.querySelector('footer').style.backgroundColor = randomColor;
    
    const h4Elements = document.querySelectorAll('h4');
    h4Elements.forEach(h4 => {
        h4.style.color = randomColor;
    });
}

window.onload = changeHeaderFooterColor;
//#303030 Americano
//#01662c Brasil
//#aa662b Colombia
//#274569 Costa Rica
//#b23030 Expresso
//#3a0000 Latte