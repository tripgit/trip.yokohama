$(function() {
  $('.change-btn').click(function() {
    var $display = $('.active');
    $display.removeClass('active');
    if($(this).hasClass('next-btn')) {
      $display.next().addClass('active');
    } else {
      $display.prev().addClass('active');
    }  

    var index = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (index == 0) {
      $('.prev-btn').hide();
    } else if (index == $('.slide').length - 1 ) {
      $('.next-btn').hide();
    }  
  });

  $('.m-click').click(function() {
    var $comento = $(this).find('.m-comento');
    if ($comento.hasClass('open')) {
      $comento.removeClass('open');
      $comento.slideUp();
      $(this).find('span').text('+');
    } else {
      $comento.addClass('open');
      $comento.slideDown();
      $(this).find('span').text('-');
    }  
  });  

  $('.color').css('background-color','#dfcba5');

  $('#robot').click(function() {
    $('#modal').fadeIn();
  });

  $('#modal').click(function() {
    $('#modal').fadeOut();
  });
});
