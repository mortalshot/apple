$('#productGallery .tabs-triggers__item').click(function() {
    $('.product-about__color').text($(this).data("value"));
})

$('.product-about__summary .product-about__options input').change(function() {
    $('.product-about__name span').text($(this).val());
});

$('.product-about__bottom .product-about__options input').change(function() {
    $('.product-about__storage span').text($(this).val());
});