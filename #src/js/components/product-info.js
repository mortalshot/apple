$('#productGallery .tabs-triggers__item').click(function () {
    $('.product-about__color').text($(this).data("value"));
})

$('.product-about__summary .product-about__options input').change(function () {
    $('.product-about__name span').text($(this).val());
});

$('.product-about__bottom .product-about__options input').change(function () {
    $('.product-about__storage span').text($(this).val());
});

$('.to-cart__promo').click(function (e) {
    e.preventDefault();
    $('.to-cart__promo-input').slideToggle(300);
});

$(".to-cart__promo-input input").focus(function () {
    $(document).on('keypress', function (e) {
        if (e.which === 13) {
            alert('You pressed enter!');
        }
    });
});

