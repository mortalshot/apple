$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})

const btnToProduct = $(".btn-to-product");
btnToProduct.on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top - $('.site__header').innerHeight();
    $('body,html').animate({ scrollTop: top }, 1000);
});

if ($('#productGallery')) {
    const productOffset = $('#productGallery').offset().top;
    $(window).scroll(function () {
        let scrolled = $(this).scrollTop();

        if (scrolled > productOffset - $('.site__header').innerHeight()) {
            btnToProduct.addClass('_active');
        } else {
            btnToProduct.removeClass('_active');
        }
    })
}