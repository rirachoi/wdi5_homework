$(document).ready(function(){
  var totalWidth = $('#carousel').width();
  var thisMargin;

  var next = function () {
      $('#carousel').css({marginLeft: '-=612px'});
  }

  var previous = function () {
      $('#carousel').css({marginLeft: '+=612px'});
  }

  $('#next').on('click', function(){
    // Without parseInt we will get string - the number with px
    thisMargin = Math.abs(parseInt($('#carousel').css("marginLeft")));
    // the width with last image
    lastImageWithWidth = (totalWidth - 612)
    if(thisMargin >= lastImageWithWidth) {
      $('#carousel').find('img:first').appendTo($('#carousel'));
    } else{
      next();
    }
  });

  $('#previous').on('click', function(){
    thisMargin = parseInt($('#carousel').css("marginLeft"));
    if(thisMargin >= 0) {
      $('#carousel').find('img:last').prependTo($('#carousel'));
      $('#carousel').css("marginLeft", -612+'px');
    }
      previous();
  });

});
