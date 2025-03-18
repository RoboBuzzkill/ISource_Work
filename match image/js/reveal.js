const cardimages = [
    {
        id: 1,
        file: "images/face1.jpg"
    },
    {
        id: 2,
        file: "images/face2.jpg"
    },
    {
        id: 3,
        file: "images/face3.jpg"
    },
    {
        id: 4,
        file: "images/face4.jpg"
    },
    {
        id: 1_1,
        file: "images/face1.jpg"
    },
    {
        id: 2_1,
        file: "images/face2.jpg"
    },
    {
        id: 3_1,
        file: "images/face3.jpg"
    },
    {
        id: 4_1,
        file: "images/face4.jpg"
    }
]

let checkandpush = function(array, element){
    for (var i = 0; i < array.length; i++){
        if(JSON.stringify(array[i]) === JSON.stringify(element))    {
            return;
        }
    }
    array.push(element);
}

let cardimage5 = {
    id: 5,
    file: "images/face5.jpg"
}
let cardimage5_1 = {
    id: 5_1,
    file: "images/face5.jpg"
}
let cardimage6 = {
    id: 6,
    file: "images/face6.jpg"
}
let cardimage6_1 = {
    id: 6_1,
    file: "images/face6.jpg"
}
let cardimage7 = {
    id: 7,
    file: "images/face7.jpg"
}
let cardimage7_1 = {
    id: 7_1,
    file: "images/face7.jpg"
}
let cardimage8 = {
    id: 8,
    file: "images/face8.jpg"
}
let cardimage8_1 = {
    id: 8_1,
    file: "images/face8.jpg"
}
let checkarray = function(){
if(NormalRow.style.display == 'none' && HardRow.style.display == 'none'){
    var i = 0;
    while (i < cardimages.length) {
        var x1 = "5"
        var x2 = "6"
        var x3 = "5_1"
        var x4 = "6_1"
        var x5 = "7"
        var x6 = "8"
        var x7 = "7_1"
        var x8 = "8_1"
        if (cardimages[i].id == x1 || cardimages[i].id == x2 || cardimages[i].id == x3 || cardimages[i].id == x4 || cardimages[i].id == x5 || cardimages[i].id == x6 || cardimages[i].id == x7 || cardimages[i].id == x8) {
            cardimages.splice(i, 1)
        } else {
           ++i;
        }
    }
}

if(NormalRow.style.display == 'flex' && HardRow.style.display == 'none'){
    checkandpush(cardimages, cardimage5);
    checkandpush(cardimages, cardimage5_1);
    checkandpush(cardimages, cardimage6);
    checkandpush(cardimages, cardimage6_1);
    var i = 0;
    while (i < cardimages.length) {
    var x1 = "7"
    var x2 = "8"
    if (cardimages[i].id == x1 || cardimages[i].id == x2){
        cardimages.splice(i, 1)
        } else {
           ++i;
        }
    }
    }

if(NormalRow.style.display == 'flex' && HardRow.style.display == 'flex'){
    checkandpush(cardimages, cardimage5);
    checkandpush(cardimages, cardimage5_1);
    checkandpush(cardimages, cardimage6);
    checkandpush(cardimages, cardimage6_1);
    checkandpush(cardimages, cardimage7);
    checkandpush(cardimages, cardimage7_1);
    checkandpush(cardimages, cardimage8);
    checkandpush(cardimages, cardimage8_1);
        }
    }
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const cards = document.querySelectorAll('.memory-card');

let shuffle = function() {
    let currentIndex = cardimages.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cardimages[currentIndex], cardimages[randomIndex]] = [
        cardimages[randomIndex], cardimages[currentIndex]];
    }
    }

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;  
    switch(this.querySelector('img').id){
        case "image1":
            flip1();
            break;
        case "image2":
            flip2();
            break;
        case "image3":
            flip3();
            break;
        case "image4":
            flip4();
            break;
        case "image5":
            flip5();
            break;
        case "image6":
            flip6();
            break;
        case "image7":
            flip7();
            break;
        case "image8":
            flip8();
            break;
        case "image1_1":
            flip1_1();
            break;
        case "image2_1":
            flip2_1();
            break;
        case "image3_1":
            flip3_1();
            break;
        case "image4_1":
            flip4_1();
            break;
        case "image5_1":
            flip5_1();
            break;
        case "image6_1":
            flip6_1();
            break;
        case "image7_1":
            flip7_1();
            break;
        case "image8_1":
            flip8_1();
            break;
            
    }
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }
    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;
  
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }
  
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {

        flipback(firstCard.querySelector('img').id);
        flipback(secondCard.querySelector('img').id);

      resetBoard();
    }, 1000);
  }
  
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
    
    cards.forEach(card => card.addEventListener('click', flipCard));    
  

let flipback = function (x) {
    document.getElementById(x).src = "images/grey.jpg";
}

let flip1 = function () {
    document.getElementById("image1").src = cardimages[0].file;
}
let flip2 = function () {
    document.getElementById("image2").src = cardimages[1].file;
}
let flip3 = function () {
    document.getElementById("image3").src = cardimages[2].file;
}
let flip4 = function () {
    document.getElementById("image4").src = cardimages[3].file;
}
let flip4_1 = function () {
    document.getElementById("image4_1").src = cardimages[4].file;
}
let flip3_1 = function () {
    document.getElementById("image3_1").src = cardimages[5].file;
}
let flip2_1 = function () {
    document.getElementById("image2_1").src = cardimages[6].file;
}
let flip1_1 = function () {
    document.getElementById("image1_1").src = cardimages[7].file;
}
let flip6 = function () {
    document.getElementById("image6").src = cardimages[8].file;
}
let flip5 = function () {
    document.getElementById("image5").src = cardimages[9].file;
}
let flip5_1 = function () {
    document.getElementById("image5_1").src = cardimages[10].file;
}
let flip6_1 = function () {
    document.getElementById("image6_1").src = cardimages[11].file;
}
let flip7 = function () {
    document.getElementById("image7").src = cardimages[12].file;
}
let flip8 = function () {
    document.getElementById("image8").src = cardimages[13].file;
}
let flip7_1 = function () {
    document.getElementById("image7_1").src = cardimages[14].file;
}
let flip8_1 = function () {
    document.getElementById("image8_1").src = cardimages[15].file;
}