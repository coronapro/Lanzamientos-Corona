const spinnerLanding = document.getElementById("spinner-landing");

window.addEventListener("load", () => {
    spinnerLanding.style.opacity = 0;
    setTimeout(()=>{
        spinnerLanding.style.display = "none";
    }, 1000);
});