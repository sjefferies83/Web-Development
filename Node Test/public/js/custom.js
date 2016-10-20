var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var title = document.title;


if(title == "My Demo") {
    home.classList.add("active");
}else if(title == "About Me"){
    about.classList.add("active")
}else{
    contact.classList.add("active");
}