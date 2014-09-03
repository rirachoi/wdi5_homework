$(document).ready(function(){

  var add_color = function(){
    var color = $('#color').val();
    var $box = $('<div></div>');
    $box.addClass('box');
    $box.css('background-color', color);
    $box.prependTo('#colors');
    //$('#colors').prepend($box);
    //$box.on('click', set_color); old-method
  };

  var set_color = function () {
    var $box = $(this);
    var color = $box.css('background-color');
    //alert('You clicked ' + color);
    $('#selected').css('background-color', color);
  };
  var clear_colors = function () {
    $('#colors').empty();
    $('#selected').css('background-color', 'white')
  };

 // var key = null;
  var paint = function(key) {
    if (key.shiftKey) {
      console.log('shift is pressed');
      var color = $('#selected').css('background-color')
      var $pixel = $(this);
      $pixel.css('background-color', color);
    } else {
      console.log('shift is not pressed');
    };
  };

  var add_background = function(){
    var backgroundImage = $('#background-image').val();
     $('#canvas').css('background', 'url(' + backgroundImage + ')no-repeat');
     $('#canvas').css('background-size',70+'%'+100+'%');
  };

  $('#add_color').on('click', add_color);
  $('#clear').on('click', clear_colors);
  $('#colors').on('click', '.box', set_color);
  $('#canvas').on('mouseover', '.pixel', paint);
  $('#add_bg').on('click', add_background);

  // when click what child(.box) which is inside of parents(#colors) then run function(set_color)
  //$('.box').on('click', set_color) -- delegation;


  var create_pixels = function () {
    // for (var i = 0; i < 1000; i++) {
    //   var $pixel = $('<div></div>');
    //   $pixel.addClass('pixel');
    //   $pixel.appendTo('#canvas');
    var $canvas = $('#canvas');
    _(2010).times(function(){
      var $pixel = $('<div></div>');
      $pixel.addClass('pixel');
      $pixel.appendTo($canvas);
    });

  };
  create_pixels();
});

