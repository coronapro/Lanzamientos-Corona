const spinnerVideo = document.getElementById("spinner_video");

// var iframeMobile = document.querySelector('.hero_video-mobile iframe');
// var iframeTablet = document.querySelector('.hero_video-tablet iframe');
// var iframeDesktop = document.querySelector('.hero_video-desktop iframe');

// var playerMobile = new Vimeo.Player(iframeMobile);
// playerMobile.on('play', () => {
//     console.log("Video cargado!");
//     spinnerVideo.style.opacity = 0;
//     setTimeout(()=>{
//         spinnerVideo.style.display = "none";
//     }, 5000);
// });

// var playerTablet = new Vimeo.Player(iframeTablet);
// playerTablet.on('play', () => {
//     console.log("Video cargado!");
//     spinnerVideo.style.opacity = 0;
//     setTimeout(()=>{
//         spinnerVideo.style.display = "none";
//     }, 5000);
// });

// var playerDesktop = new Vimeo.Player(iframeDesktop);
// playerDesktop.on('play', () => {
//     console.log("Video cargado!");
//     spinnerVideo.style.opacity = 0;
//     setTimeout(()=>{
//         spinnerVideo.style.display = "none";
//     }, 5000);
// });

setTimeout(()=>{
    spinnerVideo.style.opacity = 0;
    setTimeout(()=>{
        spinnerVideo.style.display = "none";
    }, 5000);
}, 5000);

