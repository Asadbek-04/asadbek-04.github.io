$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });

    function validForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите своё имя",
            minlength: "Имя должно содержать как минимум {0} символа(ов)!"
          },
          phone: "Пожалуйста, введите свой номер",
          email: {
            required: "Введите почту, чтобы мы могли связаться с Вами",
            email: "Адрес почты должен быть в формате name@domain.com"
          }
        }
      });
    };

    validForms('#consultation-form');
    validForms('#consultation form');
    validForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Smooth scroll and pageup

    $(window).scroll(function() {
      if($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
});