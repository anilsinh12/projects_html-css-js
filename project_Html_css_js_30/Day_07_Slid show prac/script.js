var imgs = ["p1.jpg", "w1.jpg", "w2.jpg", "w3.jpg"];
var currentImage = 0;

document.getElementById("nbtn").onclick = nextphoto;

function nextphoto() {
    currentImage++;
    if (currentImage >= imgs.length) {
        currentImage = 0;
    }
    document.getElementById("myImage").src = imgs[currentImage];
}


document.getElementById("pbtn").onclick = bphoto;

function bphoto() {
    currentImage--;
    if (currentImage <= imgs.length) {
        currentImage = 0;
    }
    document.getElementById("myImage").src = imgs[currentImage];
}