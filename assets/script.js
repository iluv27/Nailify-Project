// document.querySelector(".mainAbout");
// document.querySelector(".mainHome");
// document.querySelector(".mainGallery");

var homeElement = document.getElementById("home")

// To display the home page
document.querySelector(".mainHome").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "none"
})

// To display the about page
document.querySelector(".mainAbout").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("gallery").style.display = "none"
})

// To display the gallery page
document.querySelector(".mainGallery").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "block"
})