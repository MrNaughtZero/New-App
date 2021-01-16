function openMenu(){
    document.getElementsByClassName('mobile-links')[0].classList.add('slide-from-top');
    document.getElementsByClassName('fa-bars')[0].style.display = 'none';
    document.getElementsByClassName('fa-times')[0].style.display = 'flex';
    document.getElementsByClassName('mobile-menu')[0].onclick = closeMenu;
}

function closeMenu(){
    document.getElementsByClassName('mobile-links')[0].classList.remove('slide-from-top');
    document.getElementsByClassName('mobile-links')[0].classList.add('slide-to-top');
    document.getElementsByClassName('fa-bars')[0].style.display = 'flex';
    document.getElementsByClassName('fa-times')[0].style.display = 'none';
    document.getElementsByClassName('mobile-menu')[0].onclick = openMenu;
}