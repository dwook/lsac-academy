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

(function () {
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
})();
