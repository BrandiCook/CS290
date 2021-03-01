var count = 1;
var images = document.getElementsByClassName('slide');

function nextImg()
{
    imgCarousel(count += 1);
}

function previousImg()
{
    imgCarousel(count -= 1);
}

function imgCarousel(i)
{   
    if(i > images.length)
    {
        count = 1;
    }
    
    else if(i < 1)
    {
        count = images.length;
    }
    
    for(var j = 0; j < images.length; j++)
    {
        images[j].style.display = "none";
    }
    
    images[count - 1].style.display = "block";
}

var time = setInterval(function()
{
    nextImg();
}, 5000);