const images=document.querySelectorAll(".imageSlaider img");
const imageSlaider=document.getElementById("imageSlaider");
let index =0;
setInterval(() => {
    images[index].style.display="none";
    index = (index + 1) % images.length;
    images[index].style.display="block";
},5000);


(function() {
  
    var SkillsBar = function( bars ) {
      this.bars = document.querySelectorAll( bars );
      if( this.bars.length > 0 ) {
        this.init();
      } 
    };
    
    SkillsBar.prototype = {
      init: function() {
        var self = this;
        self.index = -5;
        self.timer = setTimeout(function() {
          self.action();
        }, 500);
        
        
      },
      select: function( n ) {
        var self = this,
          bar = self.bars[n];
          
          if( bar ) {
            var width = bar.parentNode.dataset.percent;
          
            bar.style.width = width;
            bar.parentNode.classList.add( "complete" ); 
          }
      },
      action: function() {
        var self = this;
        self.index++;
        if( self.index == self.bars.length ) {
          clearTimeout( self.timer );
        } else {
          self.select( self.index );  
        }
        
        setTimeout(function() {
          self.action();
        },500);
      }
    };
    
    window.SkillsBar = SkillsBar;
    
  })();
  
  (function() {
    document.addEventListener( "DOMContentLoaded", function() {
      var skills = new SkillsBar( ".skillbar-bar" );
    });
  })();

  //4
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 3000);
 }
