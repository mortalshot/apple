$('.gallery__main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.gallery__thumbnails',
});
$('.gallery__thumbnails').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.gallery__main',
  arrows: false,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    },
  ]
});

$('#productGallery .tabs-triggers__item').click(function () {
  $('.gallery__main').slick('refresh');
  $('.gallery__thumbnails').slick('refresh');
})

$('.accessories__cards').slick({
  mobileFirst: true,
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});