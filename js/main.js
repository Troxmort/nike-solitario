let nav = document.querySelector('nav');
document.querySelector('.responsive-menu-container').addEventListener('click', function(){
    nav.classList.toggle('active');
});

document.querySelector('.nav-skip').addEventListener('click', function(){
    nav.classList.toggle('active');
})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        }
    })
})