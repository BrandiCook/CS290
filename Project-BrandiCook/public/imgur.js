var clientID = "bfa8be349e802da";

//imgur's API
var baseURL = "https://api.imgur.com/3/gallery/search/?q=";
//search term
var apiSearch = "cats";

//starting new request
var request = new XMLHttpRequest();

//starts filling in the details 
//combines url and search word
request.open('GET', baseURL + apiSearch, true);

//identification for imgur
request.setRequestHeader('Authorization', 'Client-ID ' + clientID);

//here we check the response from imgur as soon as it gets back to us
//notice that we broke the code out into a separate function
//this is to keep the same code for when the page loads and when 
//the button is clicked
request.addEventListener("load", function() {
	loadImage();
})

request.send(null);

//keeps track of when button is clicked.
document.getElementById('moreRandomImgur').addEventListener('click', loadImage);

function loadImage(){
	var response = JSON.parse(request.responseText);
  
  //debugging purposes, outputs the response to the console
  console.log(response);
  

  //picks random from 0 to # search terms returned 
  var searchResponseSize = response.data.length;
  do{ 
		var randomCat = Math.floor(Math.random()* searchResponseSize);
  } while(response.data[randomCat].is_album == true);
  
  //image link
  var catLink = response.data[randomCat].link;
  
  //puts link into the src field of the image placeolder 
    document.getElementById('randomImage').src = catLink;
};