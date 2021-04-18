window.onscroll = function() {
    if(window.scrollY > 65) {
        document.getElementById('page-header').classList.add('header-scrolled');
    } else {
        document.getElementById('page-header').classList.remove('header-scrolled');
    }
}