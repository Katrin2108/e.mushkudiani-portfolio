const images=document.querySelectorAll(".imageSlaider img");
const imageSlaider=document.getElementById("imageSlaider");
let index =0;
setInterval(() => {
    images[index].style.display="none";
    index = (index + 1) % images.length;
    images[index].style.display="block";
},5000);
