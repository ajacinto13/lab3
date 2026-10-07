let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

function changeImg1() {
    let number = Math.floor(Math.random() * 3) + 1;
    img1.src = "images/img" + number + ".png";
}

function changeImg2() {
    let number = Math.floor(Math.random() * 3) + 1;
    img2.src = "images/img" + number + ".png";
}

function changeImg3() {
    let number = Math.floor(Math.random() * 3) + 1;
    img3.src = "images/img" + number + ".png";
}

img1.addEventListener("click", changeImg1);
img2.addEventListener("click", changeImg2);
img3.addEventListener("click", changeImg3);