var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

const body = document.body,
  scrollWrap = document.getElementsByClassName("main")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function () {
  var elements = $(".text, .img").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 600) {
        $(item).addClass("reveal");
      }
    });
  });
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 600) {
      $(item).addClass("reveal");
    }
  });
});
