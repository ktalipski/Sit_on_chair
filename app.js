document.addEventListener("DOMContentLoaded", function(event){

    var list = document.querySelector(".list");
    var listElements = list.children;
    
    for (var i = 0; i < listElements.length; i++) {
      listElements[i].addEventListener('mouseout', function() {
            this.firstElementChild.style.display = 'none';
      });
    }
    
    for (var i = 0; i < listElements.length; i++) {
      listElements[i].addEventListener('mouseover', function() {
          this.firstElementChild.style.display = 'block';
     });
   }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}






});

