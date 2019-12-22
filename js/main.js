$(function () {
  // Navigation Buttons
  $("#pro").click(function () {
    $(".face").fadeIn(2000);
    $(".total")
      .delay(550)
      .slideDown(1000);
    $(".tools")
      .delay(550)
      .slideDown(1000);
    $(".section1").slideUp(500);
    $(".portfolio").slideUp(500);
    $(".contact").slideUp(500);
  });

  $("#res").click(function () {
    $(".face").fadeOut();
    $(".total").slideUp(500);
    $(".tools").slideUp(500);
    $(".portfolio").slideUp(500);
    $(".contact").slideUp(500);
    $(".section1")
      .delay(550)
      .slideDown(1000);
  });
  $("#prot").click(function () {
    $(".face").fadeOut();
    $(".total").slideUp(500);
    $(".tools").slideUp(500);
    $(".section1").slideUp(500);
    $(".contact").slideUp(500);
    $(".portfolio")
      .delay(550)
      .slideDown(1000);
    // iframe 
    document.getElementById('iframe1').src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90159110&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  });
  $("#con").click(function () {
    $(".face").fadeOut();
    $(".total").slideUp(500);
    $(".tools").slideUp(500);
    $(".section1").slideUp(500);
    $(".portfolio").slideUp(500);
    $(".contact")
      .delay(550)
      .slideDown(1000);
  });

  // abohendi Progress bar
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $(".abohendi").offset().top) {
      var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
          callback.call(scope, i, array[i]);
        }
      };

      var max = 2160;
      forEach(document.querySelectorAll(".abohendi .progress"), function (
        index,
        value
      ) {
        percent = value.getAttribute("data-progress");
        value
          .querySelector(".fill")
          .setAttribute(
          "style",
          "stroke-dashoffset: " + ((100 - percent) / 100) * max
          );
        value.querySelector(".value").innerHTML = percent + "%";
      });
    }
    if ($(window).scrollTop() >= $(".lcname").offset().top) {
      // ui Ux Photoshope
      var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

      $trigger = $(".trigger").first();
      $points = $(".progress-points").first();
      $point_arr = $(".progress-point");
      $progress = $(".progress").first();

      val = +$points.data("current") - 1;
      max = $point_arr.length - 1;
      tracker = active = 0;

      function activate(index) {
        if (index !== active) {
          active = index;

          $point_arr.removeClass("completed ").addClass("completed");

          return $progress.css("width", (index / max) * 100 + "%");
        }
      }
      setTimeout(function () {
        return activate(val);
      }, 1000);
    }
    if ($(window).scrollTop() >= $(".information")) {
      // Typing
      var speed = 75;
      var delay = $("#table h1").text().length * speed + speed;
      typeEffect($("#table h1"), speed);
      setTimeout(function () {
        $("#table p").css("display", "inline-block");
        typeEffect($("#table p"), speed);
      }, delay);
    }
  });
  // Typing
  var speed = 75;
  var delay = $("#table h1").text().length * speed + speed;
  typeEffect($("#table h1"), speed);
  setTimeout(function () {
    $("#table p").css("display", "inline-block");
    typeEffect($("#table p"), speed);
  }, delay);

  // happy clients

  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: ""
      },
      options
    );

    var thisElement = $(this);

    $({ count: settings.start }).animate(
      { count: settings.end },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete
      }
    );
  };
  $("#number1").jQuerySimpleCounter({ end: 500, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: 1000, duration: 3000 });

  // top Button
  var btn = $("#topbutton");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });


  // Scrool top button ===============================================
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  if ($(window).width() < 576) {
    $('#iframe1').attr("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90159110&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    

  }
});
// soudcloud turn on ===============================================
$(window).resize(function () {

});

function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html("");

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


