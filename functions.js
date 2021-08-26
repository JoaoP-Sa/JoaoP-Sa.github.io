const burguer = document.getElementById('burguer');
const menuMobile = document.getElementById('menu-mobile');
const triangle = document.getElementById('triangle');
const balloon = document.getElementById('balloon');

burguer.addEventListener('click', function(){
    if(!menuMobile.classList.contains('active')){
        menuMobile.classList.add('active');
        triangle.classList.add('active');
        balloon.classList.add('active');

        triangle.style.borderBottom = '0 solid white';
        menuMobile.style.height = 'auto';
        balloon.style.height = 'auto';

        let menuHeight = menuMobile.clientHeight + 'px';
        let balloonHeight = balloon.clientHeight + 'px';

        menuMobile.style.height = 0;
        balloon.style.height = 0;

        setTimeout(function(){
            menuMobile.style.height = menuHeight;
            triangle.style.borderBottom = '35px solid white';
            balloon.style.height = balloonHeight;
        },0);
    }
    else{
        let triangleBorderBottom = window.getComputedStyle(triangle).getPropertyValue('border-bottom');
        let menuHeight = menuMobile.clientHeight + 'px';
        let balloonHeight = balloon.clientHeight + 'px';

        triangle.style.borderBottom = triangleBorderBottom;
        menuMobile.style.height = menuHeight;
        balloon.style.height = balloonHeight;

        setTimeout(function(){
            triangle.style.borderBottom = '0 solid white';
            menuMobile.style.height = 0;
            balloon.style.height = 0;
        }, 0);

        menuMobile.addEventListener('transitionend', function(){
            triangle.classList.remove('active');
            menuMobile.classList.remove('active');
            balloon.classList.remove('active');
        }, {
            once: true
        });
    }
});