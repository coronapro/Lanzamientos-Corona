const footer = document.getElementById("footer"); 
const footerH4 = document.createElement("h4");
const footerLogoContainer = document.createElement ("div");
const footerLogoYoutube = document.createElement ("a");
const footerLogoFacebook = document.createElement ("a");
const footerLogoInstagram = document.createElement ("a");
const footerLogoPinterest = document.createElement ("a");
const spanYoutube = document.createElement ("span");
const spanFacebook = document.createElement ("span");
const spanInstagram = document.createElement ("span");
const spanPinterest = document.createElement ("span");
const footerH3 = document.createElement ("h3");
const footerOtrosSitios = document.createElement ("div");
const coronaCo = document.createElement ("a");
const centroCorona = document.createElement("a");
const vajillasCorona = document.createElement("a");
const inspirame = document.createElement("a");

footerH4.innerHTML = "construimos sueños a través de los espacios";
footerH4.classList.add("footerH4")

footerLogoYoutube.appendChild(spanYoutube);
spanYoutube.classList.add("icon"); 
spanYoutube.classList.add("youtube"); 
footerLogoYoutube.href = "https://youtube.com";

footerLogoFacebook.appendChild(spanFacebook);
spanFacebook.classList.add("icon");
spanFacebook.classList.add("facebook");
footerLogoFacebook.href = "https://facebook.com"

footerLogoInstagram.appendChild(spanInstagram);
spanInstagram.classList.add("icon");
spanInstagram.classList.add("instagram");
footerLogoInstagram.href = "https://instagram.com"

footerLogoPinterest.appendChild(spanPinterest);
spanPinterest.classList.add("icon");
spanPinterest.classList.add("pinterest");
footerLogoPinterest.href = "https://pinterst.com";

footerLogoContainer.append(footerLogoYoutube, footerLogoFacebook, footerLogoInstagram, footerLogoPinterest);
footerLogoContainer.classList.add("footerLogoContainer");

footerH3.innerHTML = "Visita nuestros otros sitios";
coronaCo.href = "https://corona.co";
coronaCo.innerText = "Corona.co";
centroCorona.href ="";
centroCorona.innerText = "Centros Corona";
vajillasCorona.href = "";
vajillasCorona.innerText = "Vajillas Corona";
inspirame.href = "";
inspirame.innerText = "Inspirame";

footerOtrosSitios.append (footerH3, coronaCo, centroCorona, vajillasCorona, inspirame);
footerOtrosSitios.classList.add("footerOtrosSitios");

footer.append (footerH4, footerLogoContainer, footerOtrosSitios);

//LIGHTBOX//
function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
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
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

