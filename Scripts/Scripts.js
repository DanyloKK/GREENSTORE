$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:3
        },
        1100:{
            items:4
        }

    }

})

$( function() {
    $( "#accordion" ).accordion();
} );