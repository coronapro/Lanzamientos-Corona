const footer = document.getElementById("footer"); 
const footerContainer = document.createElement("div");
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
footerLogoYoutube.href = "https://www.youtube.com/user/OrganizacionCorona";

footerLogoFacebook.appendChild(spanFacebook);
spanFacebook.classList.add("icon");
spanFacebook.classList.add("facebook");
footerLogoFacebook.href = "https://www.facebook.com/coronamejoratuvida/";

footerLogoInstagram.appendChild(spanInstagram);
spanInstagram.classList.add("icon");
spanInstagram.classList.add("instagram");
footerLogoInstagram.href = "https://www.instagram.com/corona_inspira/";

footerLogoPinterest.appendChild(spanPinterest);
spanPinterest.classList.add("icon");
spanPinterest.classList.add("pinterest");
footerLogoPinterest.href = "https://co.pinterest.com/coronainspira/";

footerLogoContainer.append(footerLogoYoutube, footerLogoFacebook, footerLogoInstagram, footerLogoPinterest);
footerLogoContainer.classList.add("footerLogoContainer");

footerH3.innerHTML = "Visita nuestros otros sitios";
coronaCo.href = "https://corona.co";
coronaCo.innerText = "Corona.co";
centroCorona.href ="https://centrocorona.corona.co/";
centroCorona.innerText = "Centros Corona";
vajillasCorona.href = "https://www.vajillascorona.com.co/";
vajillasCorona.innerText = "Vajillas Corona";
inspirame.href = "https://www.inspirame.com.co/";
inspirame.innerText = "Inspirame";

footerOtrosSitios.append (footerH3, coronaCo, centroCorona, vajillasCorona, inspirame);
footerOtrosSitios.classList.add("footerOtrosSitios");

footerContainer.append (footerH4, footerLogoContainer, footerOtrosSitios);
footerContainer.classList.add("footerContainer")
footer.appendChild(footerContainer);

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
    slides[slideIndex-1].style.display = "flex";
  }

  //GALLERY//

  var slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("gallerySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", " ");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active2";
  }

// spinner

const spinner = document.getElementById("spinner");
window.onload = () => {
    // console.log("Video cargado!");
    spinner.style.opacity = 0;
    setTimeout( () => {
      spinner.style.display = "none";
    }, 2000);
};