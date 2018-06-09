$(() => {
  //norm
  $("#send-btn").css("background", backgroundColor);
  $(".sp#configed").css("background", backgroundColor);

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
    var target = $("#bottom");
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

  if (showCount) {
    $("#date-time").countdown(setDate, function(event) {
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
  }

  if (useOnlyColorForBackground) {
    $("#top").css("backgroundColor", backgroundColor);
  } else {
    if (staticBackground) {
      $("#top").backstretch(staticBackgroundImage);
    } else {
      $("#top").backstretch(dynamicBackgroundImages, {
        duration: transitionDuration,
        fade: transitionFade
      });
    }
    $("#particles-js").css("backgroundColor", backgroundColor);
  }
  //conditions
  if (showParticles) {
    particlesJS.load("particles-js", "./js/particles/config.json");
  }
});
