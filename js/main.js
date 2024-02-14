$(document).ready(function () {

    // count numbers
    var isAlreadyRun = false;

    $(window).scroll(function () {

        $('.counter-show').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if (bottom_of_window > (bottom_of_object + 20)) {
                if (!isAlreadyRun) {
                    $('.count-number').each(function () {

                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
                isAlreadyRun = true;
            }
        });

    });


    // faq
    $('.faq__header').click(function () {
        $(this).next('.faq__body').slideToggle();
    });

    // tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');




    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;


        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // scroll to
    var $page = $('html, body');
    $('.scrolldown').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });


































    // var swiper = new Swiper(".wlslider.s1", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 1.1,
    //             spaceBetween: 20,
    //         },

    //         575: {
    //             slidesPerView: 1.6,
    //             spaceBetween: 20,
    //         },
    //         768: {
    //             slidesPerView: 2.1,
    //             spaceBetween: 20,
    //         },
    //         991: {
    //             slidesPerView: 2.5,
    //             spaceBetween: 20,
    //         },
    //         1200: {
    //             slidesPerView: 3.1,
    //             spaceBetween: 30,
    //         },
    //         1500: {
    //             slidesPerView: 3.3,
    //             spaceBetween: 30,
    //         },
    //     },
    // });




    // МАСКА
    // $('.telinput').inputmask({
    //     "mask": "+ 999999999999",
    //     showMaskOnHover: false,
    //     showMaskOnFocus: false,
    // });




});


