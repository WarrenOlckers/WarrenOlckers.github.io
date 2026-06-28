// header section
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

//const contactButton2 = document.getElementById("contactButton2");
//contactButton2.addEventListener("click", function(){
//    window.location.href = "mailto:hello@warrenolckers.com";
//});




// project section

const projectLinks = {
    "thesisProject": "https://github.com/WarrenOlckers/Thesis_XGBoost_Experiment",
    "stayalotProject": "https://github.com/WarrenOlckers/stayalot-db",
    "habitProject": "https://github.com/WarrenOlckers/Habit_Tracker",
    "webappProject": "https://github.com/WarrenOlckers/Mr_Gallow"
};

Object.entries(projectLinks).forEach(([id, url]) => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", function() {
            window.open(url, "_blank");
        });
    }
});
