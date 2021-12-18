var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    let headerElem = document.querySelector("header");
    let logo = document.getElementById('logo');
    let navMenu = document.getElementById('nav-menu');
    let navToggle = document.getElementById('nav-toggle');
    let closeFlyout = document.getElementById("close-flyout");
    let strip = document.getElementsByClassName("strip");

    $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
    });

    navToggle.addEventListener("click", () => {
        navMenu.style.right = "0";
    });

    closeFlyout.addEventListener("click", () => {
        navMenu.style.right = "-100%";
    });

    document.addEventListener("click", (e) => {
        if (!(e.target.closest("#nav-menu") || e.target.closest("#nav-toggle"))) {
            navMenu.style.right = "-100%";
        }
    })

    document.addEventListener("scroll", e => {
        console.log(e.target.scrollingElement.scrollTop);
        let scroll = e.target.scrollingElement.scrollTop;

        if (scroll > 0) {
            navMenu.classList.add('is-sticky');
            logo.style.color = "#000";
            headerElem.style.background = "#fff";
            navToggle.style.borderColor = '#000';
            for (var i = 0; i < strip.length; i++) {
                strip[i].style.background = "#000";
            }
        } else {
            navMenu.classList.remove('is-sticky');
            logo.style.color = "#fff";
            headerElem.style.background = "transparent";
            navToggle.style.borderColor = '#fff';
            for (var i = 0; i < strip.length; i++) {
                strip[i].style.background = "#fff";
            }
        }

        if (scroll >= 150 ) {
            headerElem.style.padding = "0.5rem";
            headerElem.style.boxShadow = "0 -4px 10px 1px #999";
        } else {
            headerElem.style.padding = "1rem 0";
            headerElem.style.boxShadow = "none";
        }
    });

    document.dispatchEvent(new Event("scroll"));
});