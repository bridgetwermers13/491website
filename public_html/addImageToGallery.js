function addImage(filePath) {
    var img = document.createElement("img");
    img.setAttribute("src", filePath);
    img.setAttribute("class", "galleryImages");
    img.setAttribute("alt", "pretty picture");
    img.style.display = "none";
    document.getElementById("galleryDisplay").appendChild(img)
}