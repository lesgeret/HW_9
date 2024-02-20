// wow js
new WOW({
    animateClass: 'animate__animated',
}).init();


// slider SLICK
$('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

// аккордеон
$(function () {
    let accord = $("#accordion");
    accord.accordion({
        heightStyle: "content"
    });
    accord.accordion({
        collapsible: true
    });
    let icons = {
        header: "ui-icon-caret-1-s",
        activeHeader: ".ui-icon-caret-1-n "
    };
    accord.accordion({
        icons: icons
    });
});

// попап картинка
$('.product-image').magnificPopup({
    type: 'image'
})

// работа с формами
let inputName = $('#inputName');
let inputSurname = $('#inputSurname');
let inputPhone = $('#inputPhone');
let inputCountry = $('#inputCountry');
let inputZIP = $('#inputZIP');
let inputAddress = $('#inputAddress');

// только цифры в телефоне и индексе
let onlyNumbers = function (e) {
    if (!(parseInt(e.key) || e.key === "0" || e.keyCode === 8 || e.keyCode === 46)) {
        return false;
    }
};
inputPhone.keydown(onlyNumbers);
inputZIP.keydown(onlyNumbers);

// маска на телефон
inputPhone.inputmask({"mask": "+7 9999999999"});  /* по умолчанию */

inputCountry.on("change", function () {
    if (inputCountry.val() === "ru") {
        inputPhone.inputmask({"mask": "+7 9999999999"});
    } else {
        inputPhone.inputmask({"mask": "+375 9999999999"});
    }
});

// валидация на заполненные поля
$('#submitButton').click(function (e) {

    // e.preventDefault();

    if (!inputName.val()) {
        alert('Все поля должны быть заполнены!');
        return;
    }
    if (!inputSurname.val()) {
        alert('Все поля должны быть заполнены!');
        return;
    }
    if (!inputPhone.val()) {
        alert('Все поля должны быть заполнены!');
        return;
    }
    if (!inputZIP.val()) {
        alert('Все поля должны быть заполнены!');
        return;
    }
    if (!inputAddress.val()) {
        alert('Все поля должны быть заполнены!');
        return;
    }
    // индекс 6 символов
    if (inputZIP.val().length !== 6) {
        alert("В поле Индекс должно быть 6 символов!");
        return;
    }
    $('#inputForm').css('display', 'none');
    $('#orderHeader').css('display', 'none');
    $('#thanks').css('display', 'block');
});






