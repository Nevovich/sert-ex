// Smooth scroll
// $('a[href^="#"]').click(function (){
//     let elementClick = $(this).attr("href");
//     let destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
//     return false;
// });
$( document ).ready(function() {
    if ($(window).width() > 991) {
        // Header part
        infoBlock = $( "header #navbar-info" )
        navbarMenu = $( "header #navbar-links" )
        bigParent = $('header .navbar')
        // headerContacts = $('header .header-contacts')
        // Removing
        infoBlock.remove()
        navbarMenu.remove()
        // headerContacts.remove()
        $( "header #navbarSupportedContent" ).remove()
        bigParent.append(navbarMenu)
        bigParent.append(infoBlock)
        bigParent.append(headerContacts)
    };

    $('.about-slider').owlCarousel({
        margin:10,
        nav:true,
        items: 1,
        navText:['<span class="owi-custom"><img src="img/about/slider/back.svg"></span>', '<span class="owi-custom"><img src="img/about/slider/next.svg"></span>'],
        dots: false
    })
    $('.docs-slider').owlCarousel({
        margin:10,
        nav:true,
        navText:['<span class="owi-custom"><img src="img/about/slider/back.svg"></span>', '<span class="owi-custom"><img src="img/about/slider/next.svg"></span>'],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3,
                margin: 20
            },
            992:{
                items:4,
                margin: 25
            }
        },
        dots: false
    })
});
