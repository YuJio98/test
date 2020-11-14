var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var francais = document.getElementById("francais")
var title = document.getElementById("title");
var welcome = document.getElementById("welcome-text");
var about = document.getElementById("about");
var text = document.getElementById("about-text");
var contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("lang", "arabic");
};
english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("lang", "english");
};
francais.onclick = ()=>{
    setLanguage("francais");
    localStorage.setItem("lang", "francais");
}
onload = ()=>{
    setLanguage(localStorage.getItem("lang"));
}


function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        title.innerHTML = "يوجيو كن";
        welcome.innerHTML = " !مرحبا بك في موقع يوجيو كن";
        about.innerHTML = "معلومات عنا";
        text.innerHTML = "أنا تلميذ المعلم العظيم المبرمج شيار";
        contact.innerHTML = "اتصل بنا"
    }else if(getLanguage === "english"){
        title.innerHTML = "Yujio Ken";
        welcome.innerHTML = " Welcome to website of YuJio Ken!";
        about.innerHTML = "About US";
        text.innerHTML = "I am a Student of The Great Teacher Coder Shiyar";
        contact.innerHTML = "Contact US";
    }else if(getLanguage === "francais"){
        title.innerHTML = "Yujio Ken";
        welcome.innerHTML = " Bienvenue sur le site de YuJio Ken!";
        about.innerHTML = "À Propos de Nous";
        text.innerHTML = "Je suis un élève du grand professeur Coder Shiyar";
        contact.innerHTML = "Nous Contacter";
    }
}