var page = document.getElementsByTagName('body')[0];
page.style.fontFamily = 'Arial, sans-serif';

var nick = document.getElementById('nickname');
nick.innerHTML = 'NUNU';

var fav = document.getElementById('favorites');
fav.innerHTML = 'Beer';

var home = document.getElementById('hometown');
home.innerHTML = 'Korea';

var li = document.getElementsByTagName('li');

li[0].className = 'listitem';
li[1].className = 'listitem';
li[2].className = 'listitem';

li[0].style.color = 'red';
li[1].style.color = 'red';
li[2].style.color = 'red';

var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/400/300';
page.appendChild(newImg);

