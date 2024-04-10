(function ($) {
  "use strict";

  /*=============================================
	=    		 Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  // swiper slider
  function thmSwiperInit() {
    const swiperElm = document.querySelectorAll(".thm-swiper__slider");
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
  }

  // Banner Slider //Home One
  if ($(".thm-swiper__slider-two").length > 0) {
    var bannerSlider = new Swiper(".thm-swiper__slider-two", {
      spaceBetween: 0,
      slidesPerView: 1,
      mousewheel: false,
      height: 500,
      grabCursor: true,
      loop: true,
      effect: "slide",
      parallax: true,
      speed: 1400,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: "#main-slider-two__swiper-button-prev",
        nextEl: "#main-slider-two__swiper-button-next",
      },
    });

    bannerSlider.on("slideChange", function () {
      var csli = bannerSlider.realIndex + 1,
        curnum = $("#current");
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to(curnum, 0.1, {
            force3D: true,
            y: 10,
          });
          curnum.html("" + csli);
        },
      });
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: 0,
        delay: 0.3,
        opacity: 1,
        ease: Power2.easeOut,
      });
    });

    var totalSlides = bannerSlider.slides.length - 2;
    $("#total").html("" + totalSlides);
  }

  // Services Two Slider
  if ($(".services-two__slider").length > 0) {
    var bannerSlider = new Swiper(".services-two__slider", {
      spaceBetween: 24,
      slidesPerView: 4,
      mousewheel: false,
      height: 500,
      grabCursor: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: "#services-two__swiper-button-prev",
        nextEl: "#services-two__swiper-button-next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
    bannerSlider.on("slideChange", function () {
      var csli = bannerSlider.realIndex + 1,
        curnum = $("#current2");
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to(curnum, 0.1, {
            force3D: true,
            y: 10,
          });
          curnum.html("" + csli);
        },
      });
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: 0,
        delay: 0.3,
        opacity: 1,
        ease: Power2.easeOut,
      });
    });

    var totalSlides = bannerSlider.slides.length - 2;
    $("#total2").html("" + totalSlides);
  }

  // Testimonials Two Slider
  if ($(".testimonials-two__slider").length > 0) {
    var bannerSlider = new Swiper(".testimonials-two__slider", {
      spaceBetween: 24,
      slidesPerView: 3,
      mousewheel: false,
      height: 500,
      grabCursor: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: "#testimonials-two__swiper-button-prev",
        nextEl: "#testimonials-two__swiper-button-next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
    bannerSlider.on("slideChange", function () {
      var csli = bannerSlider.realIndex + 1,
        curnum = $("#current3");
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to(curnum, 0.1, {
            force3D: true,
            y: 10,
          });
          curnum.html("" + csli);
        },
      });
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: 0,
        delay: 0.3,
        opacity: 1,
        ease: Power2.easeOut,
      });
    });

    var totalSlides = bannerSlider.slides.length - 2;
    $("#total3").html("" + totalSlides);
  }

  // Team Two Slider
  if ($(".team-two__slider").length > 0) {
    var bannerSlider = new Swiper(".team-two__slider", {
      spaceBetween: 24,
      slidesPerView: 3,
      mousewheel: false,
      height: 500,
      grabCursor: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: "#team-two__swiper-button-prev",
        nextEl: "#team-two__swiper-button-next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
    bannerSlider.on("slideChange", function () {
      var csli = bannerSlider.realIndex + 1,
        curnum = $("#current4");
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to(curnum, 0.1, {
            force3D: true,
            y: 10,
          });
          curnum.html("" + csli);
        },
      });
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: 0,
        delay: 0.3,
        opacity: 1,
        ease: Power2.easeOut,
      });
    });

    var totalSlides = bannerSlider.slides.length - 2;
    $("#total4").html("" + totalSlides);
  }

  /*=============================================
	=    		 Wow Active  	         =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  /*=============================================
	=    		Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle
  if ($(".menu-area li.menu-item-has-children ul").length) {
    $(".menu-area .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(300);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // ===Testimonials Three Carousel=== //
  if ($("#testimonials-three__thumb").length) {
    let testimonialsThumb = new Swiper("#testimonials-three__thumb", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

    let testimonialsCarousel = new Swiper("#testimonials-three__carousel", {
      observer: true,
      observeParents: true,
      speed: 1400,
      mousewheel: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: testimonialsThumb,
      },
      pagination: {
        el: "#testimonials-three__carousel-pagination",
        type: "bullets",
        clickable: true,
      },

      navigation: {
        nextEl: "#testimonials-three__swiper-button-next",
        prevEl: "#testimonials-three__swiper-button-prev",
      },
    });
  }

  // ===Range Slider Price=== //
  if ($(".range-slider-price").length) {
    var priceRange = document.getElementById("range-slider-price");
    noUiSlider.create(priceRange, {
      start: [50, 300],
      limit: 500,
      behaviour: "drag",
      connect: true,
      range: {
        min: 50,
        max: 500,
      },
    });

    var limitFieldMin = document.getElementById("min-value-rangeslider");
    var limitFieldMax = document.getElementById("max-value-rangeslider");

    priceRange.noUiSlider.on("update", function (values, handle) {
      (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
    });
  }

  /*=============================================
	=    		Accrodion      =
=============================================*/
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            var isActive = $(this).parent().hasClass("active");
            $(".accrodion-grp." + accrodionName)
              .find(".accrodion")
              .removeClass("active")
              .find(".accrodion-content")
              .slideUp();
            if (!isActive) {
              $(this)
                .parent()
                .addClass("active")
                .find(".accrodion-content")
                .slideDown();
            }
          });
      });
    });
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  // Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      {
        accY: -50,
      }
    );
  }

  //====== Magnific Popup
  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  /*=============================================
	=    		Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Search Toggler		      =
=============================================*/
  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  $(window).on("load", function () {
    preloader();
    wowAnimation();
    thmSwiperInit();

    //Jquery Curved Circle
    if ($(".curved-circle").length) {
      $(".curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 76,
        forceHeight: true,
        forceWidth: true,
      });
    }

    //Jquery Curved Circle
    if ($(".curved-circle-2").length) {
      $(".curved-circle-2").circleType({
        position: "absolute",
        dir: 1,
        radius: 71,
        forceHeight: true,
        forceWidth: true,
      });
    }

    //Jquery Curved Circle
    if ($(".curved-circle-3").length) {
      $(".curved-circle-3").circleType({
        position: "absolute",
        dir: 1,
        radius: 76,
        forceHeight: true,
        forceWidth: true,
      });
    }
  });

  $(document).ready(function () {
    $("select:not(.ignore)").niceSelect();
  });
})(jQuery);

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
// Function for second popup
function openPop() {
  document.getElementById("popupz").style.display = "block";
  document.getElementById("overlayz").style.display = "block";
}

function closePop() {
  document.getElementById("popupz").style.display = "none";
  document.getElementById("overlayz").style.display = "none";
}

//calculator

var input = document.getElementById("kilometers");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});

// Add event listener to detect changes in kilometers input
input.addEventListener("input", function (event) {
  const kilometersInput = document.getElementById("kilometers");
  const kilometers = parseInt(kilometersInput.value);

  // If kilometers input is empty, reset totalPrice to zero
  if (kilometersInput.value === "") {
    totalPrice = 0;
  }
});
function calculatePrice() {
  const city = document.getElementById("city").value;
  const carType = document.getElementById("carType").value;
  const kilometersInput = document.getElementById("kilometers");
  const kilometers = parseInt(kilometersInput.value);

  // Validation: Check if kilometers input is empty
  if (isNaN(kilometers) || kilometers <= 0) {
    document.getElementById("error-kilometers").innerText =
      "Please enter a valid number of kilometers.";
    return;
  } else {
    document.getElementById("error-kilometers").innerText = ""; // Clear error message if valid input
  }

  let suvPrice, totalPrice;

  if (kilometers < 35) {
    switch (city) {
      case "Evakuatori":
        switch (carType) {
          case "SUV":
            suvPrice = 60;
            break;
          case "Sedan":
            suvPrice = 50;
            break;
          case "Hatchback":
            suvPrice = 70;
            break;
        }
        break;
      case "Batumi":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      case "Mtskheta":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      default:
        break;
    }

    const additionalPricePerKm = 10;
    const additionalKilometers = (kilometers - 10) / 5;
    totalPrice = suvPrice + additionalKilometers * additionalPricePerKm;
  } else if (kilometers <= 100) {
    switch (city) {
      case "Evakuatori":
        switch (carType) {
          case "SUV":
            suvPrice = 80;
            break;
          case "Sedan":
            suvPrice = 70;
            break;
          case "Hatchback":
            suvPrice = 90;
            break;
        }
        break;
      case "Batumi":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      case "Mtskheta":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      default:
        break;
    }

    const additionalPricePerKm = 10;
    const additionalKilometers = (kilometers - 10) / 10;
    totalPrice = suvPrice + additionalKilometers * additionalPricePerKm;
  } else {
    switch (city) {
      case "Evakuatori":
        switch (carType) {
          case "SUV":
            suvPrice = 120;
            break;
          case "Sedan":
            suvPrice = 100;
            break;
          case "Hatchback":
            suvPrice = 140;
            break;
        }
        break;
      case "Batumi":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      case "Mtskheta":
        switch (carType) {
          case "SUV":
            suvPrice = 70;
            break;
          case "Sedan":
            suvPrice = 60;
            break;
          case "Hatchback":
            suvPrice = 80;
            break;
        }
        break;
      default:
        break;
    }

    const additionalPricePerKm = 10;
    const additionalKilometers = (kilometers - 10) / 10;
    totalPrice = suvPrice + additionalKilometers * additionalPricePerKm;
  }

  // Display result
  document.getElementById(
    "result"
  ).innerHTML = `Total Price: ₾${totalPrice.toFixed(2)}`;
}
