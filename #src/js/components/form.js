let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button--plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}

$(".form__input").focus(function () {
    $(this).closest('.form__item').children('.form__label').css({ 'top': '-12px'});
});
$(".form__input").focusout(function () {
    if ($(this).val() == '') {
        $(this).closest('.form__item').children('.form__label').css({ 'top': '6px'});
    }
});

$(".form__input--phone").mask("+7 (999) 999-99-99");
$(".form__input--index").mask("999999");