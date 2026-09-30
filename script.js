let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

function hoverImg1() {
    let number = Math.floor(Math.random() * 3) + 1;
    img1.src = "images/img" + number + ".png";
}

function releaseImg1() {
    img1.src = "images/img1.png";
}

function changeImg1() {
    img1.src = "images/img" + number + ".png";
}

function hoverImg2() {
    let number = Math.floor(Math.random() * 3) + 1;
    img2.src = "images/img" + number + ".png";
}

function releaseImg2() {
    img2.src = "images/img2.png";
}

function changeImg2() {
    img2.src = "images/img" + number + ".png";
}

function hoverImg3() {
    let number = Math.floor(Math.random() * 3) + 1;
    img3.src = "images/img" + number + ".png";
}

function releaseImg3() {
    img3.src = "images/img3.png";
}

function changeImg3() {
    img3.src = "images/img" + number + ".png";
}

img1.addEventListener("mouseover", hoverImg1);
img2.addEventListener("mouseover", hoverImg2);
img3.addEventListener("mouseover", hoverImg3);

img1.addEventListener("mouseout", releaseImg1);
img2.addEventListener("mouseout", releaseImg2);
img3.addEventListener("mouseout", releaseImg3);

img1.addEventListener("click", changeImg1);
img2.addEventListener("click", changeImg2);
img3.addEventListener("click", changeImg3);