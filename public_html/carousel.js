/*
    Add an automatic image carousel effect
    Adapted from https://www.w3schools.com/w3css/w3css_slideshow.asp
 */

var slideIndex = 0;
carousel();
function carousel() {
    let i;
    const x = document.getElementsByClassName("galleryImages");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        // if (x[i].parentElement.id !== "galleryDisplay"){
        //     document.getElementById("galleryDisplay").appendChild(x[i])
        // }
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "flex";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}