function myFunc(e) {
        console.log("hello")
        e.stopPropagation();
        
        document.body.classList.toggle('menu-open');
}


const mainWrapper = document.querySelector('.main-wrapper');

mainWrapper.addEventListener('click', function() {
        if (document.body.classList.contains('menu-open')) {
                document.body.classList.remove('menu-open');
        }
});
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("myAudio");
    const audioBtn = document.getElementById("audioBtn");
    const loadingBar = document.querySelector(".loading-bar");
    const preloader = document.querySelector(".preloader");
    const mainWrapper = document.querySelector(".main-wrapper");

    if (audioBtn && audio) {
        audioBtn.addEventListener("click", () => {
            // Play track safely
            audio.play().catch(err => console.log("Audio block:", err));

            // Apply body music class to change icon symbol
            document.body.classList.add("play-music");
            
            // Fire progress loading bar
            loadingBar.classList.add("start-loading");
            
            // Prevent spam clicking
            audioBtn.style.pointerEvents = "none";

            // Wait exactly 6 seconds (6000ms) then reveal website layout smoothly
            setTimeout(() => {
                if (preloader) preloader.classList.add("loaded");
                if (mainWrapper) {
                    mainWrapper.style.filter = "blur(0px)";
                    mainWrapper.style.opacity = "1";
                }
            }, 6000); 
        });
    }
});
