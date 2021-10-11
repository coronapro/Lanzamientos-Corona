const spinner = document.getElementById("spinner");

function delaySpinner () {
  spinner.style.display = "none";
}

function showSpinner () {
  spinner.style.opacity = "0";
  setTimeout (delaySpinner, 300);
}

window.addEventListener("load",showSpinner);