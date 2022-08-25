(function ($) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      /* Slider for News and Events start here */
      jQuery('.news-events-slider .view-content').owlCarousel({
        loop: false,
        margin: 40,
        items: 3,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          320: {
            items: 1,
            nav: true
          },
          768: {
            items: 2,
            nav: true
          },
          1024: {
            items: 3,
            nav: true
          },
        }
      });
      jQuery(".owl-prev").html('<div class="owl-prev">prev</div>');
      jQuery(".owl-next").html('<div class="owl-next">next</div>');
      jQuery('.news-events-slider .view-content').addClass('owl-carousel');

      /* Slider for News and Events end here */

      /* Slider for Footer Banner start here */
      jQuery('.view-footer-banner .view-content').owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        items: 7,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          320: {
            items: 2,
          },
          480: {
            items: 3,
          },
          768: {
            items: 5,
          },
          1024: {
            items: 7,
          },
        }
      });
      jQuery('.view-footer-banner .view-content').addClass('owl-carousel');
      /* Slider for Footer Banner End here */

      //Top Scroll
      var scrollTop = jQuery(".scrollTop");
      jQuery(window).scroll(function () {

        // declare variable
        var topPos = jQuery(this).scrollTop();
        if (topPos > 200) {
          jQuery(scrollTop).css("opacity", "1");

        } else {
          jQuery(scrollTop).css("opacity", "0");
        }

      });
      jQuery(scrollTop).click(function () {
        jQuery('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      });//Top Scroll End


// JS for Mobile Menu Toggle
      let hamburger = document.querySelector('.hamburger');
      let menu = document.querySelector('.nav');

      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('isactive');
        menu.classList.toggle('active');
      });
// JS for Mobile Menu Toggle

    }
  };
})(jQuery);