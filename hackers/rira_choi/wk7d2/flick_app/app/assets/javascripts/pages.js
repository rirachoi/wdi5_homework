$(document).ready(function(){



  var search_flickr = function () {
    var query = $('#search').val();
    var page = 1;

    var process_images = function(data){
      var images = data.photos.photo;

      for (var i = 0; i < images.length; i++){
        var item = images[i];
        var img_url = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
          console.log(img_url);

        var $img = $('<img>');
        $img.attr('src', img_url);
        var $a= $('<a target="blank"></a>')
        $a.attr('href', img_url);
        $($a).append($img);
        $('#images').prepend($a);
      }; //for loop end

      $('#iwanttosee, #more_pics').css('display', 'inline-block');
      $('img').dblclick(function(){
        //$(this).addClass('enlarge_img');
        $(this).css({width:"500px",height:"500px"});
      }); // enlarge img
      //  $('#more_pics').mouseleave(function(){
      //     $(this).removeClass('more_pics');
      // });

    }; // process_images end

    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=' + query + '&per_page=12&page=' + page + '&format=json&jsoncallback=?', process_images);
  }; // search flickr end

  var clear_images = function() {
      $('#images').empty();
      $('#more_pics').css('display','none');
      $('#iwanttosee').css('display','none');
    }; //clear_images end

  $('#search_flickr').on('click', search_flickr);
  $('#clear_images').on('click', clear_images);

  $('#more_pics').hover(function() {
    $(this).addClass('more_pics');

  }); // more_pics end

}); // document end