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