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

});

