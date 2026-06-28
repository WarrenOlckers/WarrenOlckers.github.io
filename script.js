let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", function(){
    window.location.href = "mailto:hello@warrenolckers.com";
});