const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 8000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 8000,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 8000,
            arrows: false,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 8000,
            arrows: false,
            adaptiveHeight: true,
          },
        },
    ]
        
  };

  const settings2 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                fade: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                fade: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                arrows: false
              },
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, 
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                arrows: false
              },
            },
        ]

  };

  export { settings, settings2 };