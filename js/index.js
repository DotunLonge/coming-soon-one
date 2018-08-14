$(() => {
  // Beginning Of Jquery Function Declarations
  function attachListeners(backgroundColor) {
    $("#learn-more")
      .mouseenter(function() {
        $(this)
          .css("background", backgroundColor)
          .css("border-color", backgroundColor);
      })
      .mouseleave(function() {
        $(this)
          .css("background", "transparent")
          .css("border-color", "white");
      });

    $("#learn-more").on("click", function(e) {
      var target = $("#about");
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
      }
    });

    $("#contact-us")
      .mouseenter(function() {
        $(this)
          .css("background", backgroundColor)
          .css("border-color", backgroundColor)
          .css("color", "white");
      })
      .mouseleave(function() {
        $(this)
          .css("background", "white")
          .css("border-color", "white")
          .css("color", backgroundColor);
      });
    $("#contact-us").on("click", function(e) {
      var target = $("#contact");
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
      }
    });

    $("#send-btn")
      .mouseleave(function() {
        $(this)
          .css("background", backgroundColor)
          .css("color", "white");
      })
      .mouseenter(function() {
        $(this)
          .css("background", "white")
          .css("color", backgroundColor);
      });
  }
  function toggleCount(showCount) {
    if (showCount) {
      $("#date-time").countdown(config.setDate, function(event) {
        $(this).html(`
          <div class="xs-3">
              <h3 id='days'>${event.strftime("%D")}</h3>
                  <p>Days</p>
              </div>
              <div class="xs-3">
                  <h3 id='hrs'>${event.strftime("%H")}</h3>
                  <p>Hours</p>
              </div>
              <div class="xs-3">
                  <h3 id='mins'>${event.strftime("%M")}</h3>
                  <p>Minutes</p>
              </div>
              <div class="xs-3">
                  <h3 id='secs'>${event.strftime("%S")}</h3>
                  <p>Seconds</p>
              </div>
          `);
      });
    } else {
      $("#date-time").countdown("pause");
      $("#date-time").html("");
    }
  }
  // End Of Function Declarations

  // Beginning Of Function Calls
  attachListeners(config.backgroundColor);
  toggleCount(config.showCount);
  // End Of Function Calls

  // Beginning Of Conditionals
  if (config.showParticles) {
    particlesJS.load("particles-js", "./js/particles/config.json");
  }
  if (config.useOnlyColorForBackground === false) {
    if (config.staticBackground) {
      $("#top").backstretch(config.staticBackgroundImage);
    } else {
      $("#top").backstretch(config.dynamicBackgroundImages, {
        duration: config.transitionDuration,
        fade: config.transitionFade
      });
    }
  }
  // End Of Conditionals

  // Beginning Of Listeners
  $("#color-picker").on("change", function(e) {
    colorRelated(e.target.value);
    attachListeners(e.target.value);
  });

  $("#true").on("click", function(e) {
    toggleCount(true);
    $(this).addClass("active");
    $("#false").removeClass("active");
  });
  $("#false").on("click", function(e) {
    toggleCount(false);
    $(this).addClass("active");
    $("#true").removeClass("active");
  });
  $("#cog").on("click", function(e) {
    $(".sidebar").toggleClass("hide-away");
  });
  // End Of Listeners
});
