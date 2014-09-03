var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

var bookList = function(title, author, alreadyRead){
  for (var i = 0; i < books.length; i++){
    var book = books[i];
    if (alreadyRead == true ){
      return title + " by " + author + ", and You've already read it !"
    } else {
      return title + " by " + author + ", and You still need to read it !"
    }
  }
 };

var bookList1 = bookList(books[0].title, books[0].author, books[0].alreadyRead);
var bookList2 = bookList(books[1].title, books[1].author, books[1].alreadyRead);

var page = document.getElementsByTagName('body')[0];
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode(bookList1 + " " + bookList2);
newParagraph.appendChild(paragraphText);
page.appendChild(newParagraph);

var newUl = document.createElement('ul');
var newLi1 = document.createElement('li');
newLi1.style.color = 'red';
var li1Text = document.createTextNode(bookList1);
var newLi2 = document.createElement('li');
var li2Text = document.createTextNode(bookList2);
var newImg1 = document.createElement('img');
newImg1.src = 'http://placekitten.com/400/300';
var newImg2 = document.createElement('img');
newImg2.src = 'http://placekitten.com/400/100';

newLi1.appendChild(newImg1);
newLi2.appendChild(newImg2);

newLi1.appendChild(li1Text);
newLi2.appendChild(li2Text);

newUl.appendChild(newLi1);
newUl.appendChild(newLi2);

page.appendChild(newUl);



