// ハンバーガーメニュー

$('.drawer-btn').on('click', function () {
    var jQuerynavList = $(this);
    if (jQuerynavList.hasClass("current")) {
        jQuerynavList.removeClass("current");
        $('.gnav').fadeOut('500');
        $('.nav-layer').removeClass('active');
        $('.nav-layer').fadeOut('500');
    } else {
        jQuerynavList.addClass("current");
        $('.gnav').fadeIn('500');
        $('.nav-layer').fadeIn('500');
        $('.nav-layer').addClass('active');
    }
    return false;
});

// 開閉ボタン

$('.hide1').click(function () {
    $('.footer-hide1').slideToggle();
});

$('.hide2').click(function () {
    $('.footer-hide2').slideToggle();
});

$('.hide3').click(function () {
    $('.footer-hide3').slideToggle();
});

$('.hide4').click(function () {
    $('.footer-hide4').slideToggle();
});

$(function() {
    $('.hide1').click(function() {
      $(".hide1").toggleClass('active');
    });
  });

  $(function() {
    $('.hide2').click(function() {
      $(".hide2").toggleClass('active');
    });
  });

  $(function() {
    $('.hide3').click(function() {
      $(".hide3").toggleClass('active');
    });
  });

  $(function() {
    $('.hide4').click(function() {
      $(".hide4").toggleClass('active');
    });
  });