Rails.application.routes.draw do
  root :to => 'pages#index'
end

   # var images = data.photos.photo;

   #    for (var i = 0; i < images.length; i++){
   #      var item = images[i];
   #      var img_url = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
   #      console.log(img_url)

   #      var $img = $('<img>');
   #      $img.attr('src', img_url);
   #      $('#images').append($img);
   #    };
   #  };