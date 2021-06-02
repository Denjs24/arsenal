$(document).ready(function(){
    $(".banner__slider").slick({
        dots: true,
        arrows : false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        slidesToShow: 1,
        
    });
    $(".brends__slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        speed: 300,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 560,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 2,
                autoplaySpeed: 2000,
              }
            }
            // {
            //     breakpoint: 350,
            //     settings: {
            //       arrows: false,
            //       slidesToShow: 2
            //     }
            //   }
          ]
    });
    $(".column-items").slick({
      dots: false,
      arrows : false,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 683,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
  $(".column-items__new").slick({
    dots: false,
    arrows : false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 683,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});
    $(".burger-menu").click(function () {
        $(".burger-menu").toggleClass("burger-menu__active");
        $(".burger-content").toggleClass("burger-content__active");
    })
    $(".nav-menu__item").click(function(){
        if($(this).hasClass("nav-menu__item__active")) {
          $(".nav-menu__item").removeClass("nav-menu__item__active")
        }else{
            $(".nav-menu__item").removeClass("nav-menu__item__active")
            $(this).addClass("nav-menu__item__active")
        }
    });
    $(".nav-menu__link").click(function () {
        $(this).parent(".nav-menu__item__active").removeClass("nav-menu__item__active");
    });
    $(".column-items__item").mouseover(function () {
        $(this).children(".sales-actions").addClass("sales-actions__active");
    });
    $(".column-items__item").mouseout(function () {
        $(this).children(".sales-actions").removeClass("sales-actions__active");
    });
    
});
