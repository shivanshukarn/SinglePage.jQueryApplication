$(document).ready(function () {
    console.log("Hello World");
    $('.news').hide()
    $('.contact').hide()
    $('.about').hide()

    $('#home').click(function () {
        $('.home').show()
        $('.news').hide()
        $('.contact').hide()
        $('.about').hide()
    });

    $('#news').click(function () {
        $('.home').hide()
        $('.news').show()
        $('.contact').hide()
        $('.about').hide()
    });

    $('#contact').click(function () {
        $('.home').hide()
        $('.news').hide()
        $('.contact').show()
        $('.about').hide()
    });

    $('#about').click(function () {
        $('.home').hide()
        $('.news').hide()
        $('.contact').hide()
        $('.about').show()
    });

});

// $('.show').hide()
// $('.hide').click(function () {
//     $('h1').hide()
//     $('.hide').hide()
//     $('.show').show()
//     $('.show').click(function () {
//         $('h1').show()
//         $('.show').hide()
//         $('.hide').show()
//     });
// });