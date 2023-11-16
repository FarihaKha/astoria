document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800, 'swing');
});
