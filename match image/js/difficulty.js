const NormalRow = document.querySelector('#normalrow');
const HardRow = document.querySelector('#hardrow');

let SelectEasy = function () {
    NormalRow.style.display = 'none';
    HardRow.style.display = 'none';
    document.getElementById("image5").src = "images/face1.jpg";
    document.getElementById("image6").src = "images/face1.jpg";
    document.getElementById("image7").src = "images/face1.jpg";
    document.getElementById("image8").src = "images/face1.jpg";
    document.getElementById("image5_1").src = "images/face1.jpg";
    document.getElementById("image6_1").src = "images/face1.jpg";
    document.getElementById("image7_1").src = "images/face1.jpg";
    document.getElementById("image8_1").src = "images/face1.jpg";
}

let SelectNormal = function () {
    NormalRow.style.display = 'flex';
    HardRow.style.display = 'none';
    document.getElementById("image5").src = "images/grey.jpg";
    document.getElementById("image6").src = "images/grey.jpg";
    document.getElementById("image7").src = "images/face1.jpg";
    document.getElementById("image8").src = "images/face1.jpg";
    document.getElementById("image5_1").src = "images/grey.jpg";
    document.getElementById("image6_1").src = "images/grey.jpg";
    document.getElementById("image7_1").src = "images/face1.jpg";
    document.getElementById("image8_1").src = "images/face1.jpg";
}

let SelectHard = function () {
    NormalRow.style.display = 'flex';
    HardRow.style.display = 'flex';
    document.getElementById("image5").src = "images/grey.jpg";
    document.getElementById("image6").src = "images/grey.jpg";
    document.getElementById("image7").src = "images/grey.jpg";
    document.getElementById("image8").src = "images/grey.jpg";
    document.getElementById("image5_1").src = "images/grey.jpg";
    document.getElementById("image6_1").src = "images/grey.jpg";
    document.getElementById("image7_1").src = "images/grey.jpg";
    document.getElementById("image8_1").src = "images/grey.jpg";
}