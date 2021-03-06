/* ===================================================================
 *
 * Scripts Gamespec, projecte final PiCE Girona 2020
 *
 * =================================================================== */

(function ($) {
  "use strict";

  var cfg = {
      scrollDuration: 800, // smoothscroll duration
      mailChimpURL: "", // mailchimp url
    },
    $WIN = $(window);

  // Add the User Agent to the <html>
  // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* Preloader
   * ----------------------------------------------------- */
  var clPreloader = function () {
    $WIN.on("load", function () {});
  };

  /* MediaElement
   * ------------------------------------------------------ */
  var clMediaElement = function () {
    $("audio").mediaelementplayer({
      pluginPath: "https://cdnjs.com/libraries/mediaelement/",
      shimScriptAccess: "always",
    });
  };

  /* FitVids
    ------------------------------------------------------ */
  var clFitVids = function () {
    $(".video-container").fitVids();
  };

  /* Pretty Print
   * -------------------------------------------------- */
  var clPrettyPrint = function () {
    $("pre").addClass("prettyprint");
    $(document).ready(function () {
      prettyPrint();
    });
  };

  /* Menú per a mòbils/pantalles petites
   * ---------------------------------------------------- */
  var clMobileMenu = function () {
    var navWrap = $(".header_nav-wrap"),
      closeNavWrap = navWrap.find(".header_overlay-close"),
      menuToggle = $(".header_toggle-menu"),
      siteBody = $("body");

    menuToggle.on("click", function (e) {
      var $this = $(this);

      e.preventDefault();
      e.stopPropagation();
      siteBody.addClass("nav-wrap-is-visible");
    });

    closeNavWrap.on("click", function (e) {
      var $this = $(this);

      e.preventDefault();
      e.stopPropagation();

      if (siteBody.hasClass("nav-wrap-is-visible")) {
        siteBody.removeClass("nav-wrap-is-visible");
      }
    });

    // Obrir (o tancar) el menú
    $(".header_nav .has-children")
      .children("a")
      .on("click", function (e) {
        e.preventDefault();

        if ($(".close-mobile-menu").is(":visible") == true) {
          $(this)
            .toggleClass("sub-menu-is-open")
            .next("ul")
            .slideToggle(200)
            .end()
            .parent(".has-children")
            .siblings(".has-children")
            .children("a")
            .removeClass("sub-menu-is-open")
            .next("ul")
            .slideUp(200);
        }
      });
  };

  /* Masonry aka "Quadrícula"
   * ---------------------------------------------------- */
  var clMasonryFolio = function () {
    var containerBricks = $(".masonry");

    containerBricks.imagesLoaded(function () {
      containerBricks.masonry({
        itemSelector: ".masonry_brick",
        percentPosition: true,
        resize: true,
      });
    });

    // ajustar la quadrícula després de carregar cada imatge
    containerBricks.imagesLoaded().progress(function () {
      containerBricks.masonry("layout");
    });
  };

  /* slick slider
   * ------------------------------------------------------ */
  var clSlickSlider = function () {
    var $gallery = $(".slider__slides").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnFocus: false,
      fade: true,
      cssEase: "linear",
    });

    $(".slider__slide").on("click", function () {
      $gallery.slick(
        "slickGoTo",
        parseInt($gallery.slick("slickCurrentSlide")) + 1
      );
    });
  };

  /* Smooth Scrolling
   * ------------------------------------------------------ */
  var clSmoothScroll = function () {
    $(".smoothscroll").on("click", function (e) {
      var target = this.hash,
        $target = $(target);

      e.preventDefault();
      e.stopPropagation();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          cfg.scrollDuration,
          "swing"
        )
        .promise()
        .done(function () {
          // Comprova si el menú està obert
          if ($("body").hasClass("menu-is-open")) {
            $(".header-menu-toggle").trigger("click");
          }

          window.location.hash = target;
        });
    });
  };

  /* Placeholder Plugin Settings
   * ------------------------------------------------------ */
  var clPlaceholder = function () {
    $("input, textarea, select").placeholder();
  };

  /* Alert Boxes
   * ------------------------------------------------------ */
  var clAlertBoxes = function () {
    $(".alert-box").on("click", ".alert-box__close", function () {
      $(this).parent().fadeOut(500);
    });
  };

  /* Animate On Scroll
   * ------------------------------------------------------ */
  var clAOS = function () {
    AOS.init({
      offset: -400,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
      disable: "mobile",
    });
  };

  /* AjaxChimp
   * ------------------------------------------------------ */
  var clAjaxChimp = function () {
    $("#mc-form").ajaxChimp({
      language: "es",
      url: cfg.mailChimpURL,
    });

    // Mailchimp translation
    //
    //  Defaults:
    //	 'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.es = {
      submit: "Submitting...",
      0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    };
  };

  /* Back2Top
   * ------------------------------------------------------ */
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });
  $(document).ready(function () {
    $("#back2Top").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });

  /* Mapa amb Google Maps
   * ------------------------------------------------------ */
  // Possem botons personalitzats per fer zoom in/out
  var clCustomZoomControl = function (controlDiv, map) {
    var controlUIzoomIn = document.getElementById("map-zoom-in"),
      controlUIzoomOut = document.getElementById("map-zoom-out");

    controlDiv.appendChild(controlUIzoomIn);
    controlDiv.appendChild(controlUIzoomOut);

    // Configureu els botons per fer zoom in o zoom out
    google.maps.event.addDomListener(controlUIzoomIn, "click", function () {
      map.setZoom(map.getZoom() + 1); // Zoom in
    });
    google.maps.event.addDomListener(controlUIzoomOut, "click", function () {
      map.setZoom(map.getZoom() - 1); // Zoom out
    });
  };

  var clGoogleMap = function () {
    if (typeof google === "object" && typeof google.maps === "object") {
      var latitude = 41.984795,
        longitude = 2.81125,
        // Latitud i longitud de la Fira de Girona
        map_zoom = 14,
        main_color = "#0054a5",
        saturation_value = -30,
        brightness_value = 5,
        marker_url = null,
        winWidth = $(window).width();

      // Fem els botons de zoom in/out visibles
      $("#map-zoom-in, #map-zoom-out").show();

      // Marque'm l'ubicació amb una icona
      if (winWidth > 480) {
        marker_url = "images/icon-location@2x.png";
      } else {
        marker_url = "images/icon-location.png";
      }

      // Estils
      var style = [
        {
          // set saturation for the labels on the map
          elementType: "labels",
          stylers: [{ saturation: saturation_value }],
        },
        {
          // poi stands for point of interest - don't show these lables on the map
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          // don't show highways lables on the map
          featureType: "road.highway",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          // don't show local road lables on the map
          featureType: "road.local",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          // don't show arterial road lables on the map
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          // don't show road lables on the map
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "off" }],
        },
        // style different elements on the map
        {
          featureType: "transit",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "poi.government",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "poi.sport_complex",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "poi.attraction",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "landscape",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value },
          ],
        },
      ];

      // map options
      var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 14,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
      };

      // inizialize the map
      var map = new google.maps.Map(
        document.getElementById("map-container"),
        map_options
      );

      // add a custom marker to the map
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        visible: true,
        icon: marker_url,
      });

      var zoomControlDiv = document.createElement("div");
      var zoomControl = new clCustomZoomControl(zoomControlDiv, map);

      // insert the zoom div on the top right of the map
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);
    }
  };

  /* Preparar els scripts
   * ------------------------------------------------------ */
  (function ssInit() {
    clPreloader();
    clMediaElement();
    clPrettyPrint();
    clMobileMenu();
    clMasonryFolio();
    clSlickSlider();
    clSmoothScroll();
    clPlaceholder();
    clAlertBoxes();
    clAOS();
    clAjaxChimp();
    clGoogleMap();
  })();
})(jQuery);
