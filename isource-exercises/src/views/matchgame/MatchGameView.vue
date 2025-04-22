<template>
    <div>
      <header></header>
      <main>
        <h1 class="mb-0 text-center">Face matching game</h1>
        <h2 class="mb-0 text-center">Match the faces before time runs out!</h2>
        <br>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h4 class="mb-0 text-center">Time Remaining</h4>
                </div>
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-12">
                      <h3 ref="seconds" class="display-6">00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="container">
          <div class="row" id="easyrow">
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 1" ref="image1" id="image1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 2" ref="image2" id="image2">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 3" ref="image3" id="image3">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 4" ref="image4" id="image4">
            </div>
          </div>
          <br>
          <div class="row" id="easyrow">
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 4" ref="image4_1" id="image4_1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 3" ref="image3_1" id="image3_1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 2" ref="image2_1" id="image2_1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/grey.jpg" alt="image 1" ref="image1_1" id="image1_1">
            </div>
          </div>
          <br>
          <div class="row" id="normalrow">
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 6" ref="image6" id="image6">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 5" ref="image5" id="image5">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 5" ref="image5_1" id="image5_1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 6" ref="image6_1" id="image6_1">
            </div>
          </div>
          <br>
          <div class="row" id="hardrow">
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 7" ref="image7" id="image7">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 8" ref="image8" id="image8">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 7" ref="image7_1" id="image7_1">
            </div>
            <div class="col-6 col-sm-3 memory-card" @click="flipCard($event)">
              <img class="img-fluid shadow-lg p-3 mb-5 bg-white rounded border border-dark" src="img/face1.jpg" alt="image 8" ref="image8_1" id="image8_1">
            </div>
          </div>
          <br>
        </div>
        
        <div class="modal" tabindex="-1" id="onload" ref="onloadModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title">Welcome to the image matching game!</h5>
              </div>
              <div class="modal-body text-center">
                <p>Please select what difficulty you would like to play on</p>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-success" @click="selectEasy">Easy</button>
                <button type="button" class="btn btn-warning" @click="selectNormal">Normal</button>
                <button type="button" class="btn btn-danger" @click="selectHard">Hard</button>
              </div>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="beginGame">Begin</button>
            </div>
          </div>
        </div>
  
        <div class="modal" tabindex="-1" id="victorymodal" ref="victoryModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title">You Win!</h5>
              </div>
              <div class="modal-body text-center">
                <p>Would you like to play again?</p>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary" @click="reloadPage">Play Again</button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="modal" tabindex="-1" id="losemodal" ref="loseModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title">You Lose :/</h5>
              </div>
              <div class="modal-body text-center">
                <p>Would you like to play again?</p>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary" @click="reloadPage">Play Again</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  </template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap';

export default {
  name: 'MemoryGame',
  data() {
    return {
      hasFlippedCard: false,
      lockBoard: false,
      firstCard: null,
      secondCard: null,
      cardimages: [
        { id: 1, file: "img/face1.jpg" },
        { id: 2, file: "img/face2.jpg" },
        { id: 3, file: "img/face3.jpg" },
        { id: 4, file: "img/face4.jpg" },
        { id: '1_1', file: "img/face1.jpg" },
        { id: '2_1', file: "img/face2.jpg" },
        { id: '3_1', file: "img/face3.jpg" },
        { id: '4_1', file: "img/face4.jpg" }
      ],
      extraCards: {
        cardimage5: { id: 5, file: "img/face5.jpg" },
        cardimage5_1: { id: '5_1', file: "img/face5.jpg" },
        cardimage6: { id: 6, file: "img/face6.jpg" },
        cardimage6_1: { id: '6_1', file: "img/face6.jpg" },
        cardimage7: { id: 7, file: "img/face7.jpg" },
        cardimage7_1: { id: '7_1', file: "img/face7.jpg" },
        cardimage8: { id: 8, file: "img/face8.jpg" },
        cardimage8_1: { id: '8_1', file: "img/face8.jpg" }
      },
      timerInterval: null,
      victoryCheckInterval: null
    };
  },
  mounted() {
    this.showOnloadModal();
    this.setupVictoryCheck();
  },
  methods: {
    showOnloadModal() {
      const myModal = new Modal(this.$refs.onloadModal);
      myModal.show();
    },
    setupVictoryCheck() {
      const victoryModal = new Modal(this.$refs.victoryModal);
      this.victoryCheckInterval = window.setInterval(() => {
        if (!document.querySelector("img[src$='grey.jpg']")) {
          victoryModal.show();
        }
      }, 10);
    },
    reloadPage() {
      window.location.reload();
    },
    beginGame() {
      this.timerStart();
      this.checkArray();
      this.shuffle();
    },
    selectEasy() {
      const normalRow = document.querySelector('#normalrow');
      const hardRow = document.querySelector('#hardrow');
      
      normalRow.style.display = 'none';
      hardRow.style.display = 'none';
      this.$refs.image5.src = "img/face1.jpg";
      this.$refs.image6.src = "img/face1.jpg";
      this.$refs.image7.src = "img/face1.jpg";
      this.$refs.image8.src = "img/face1.jpg";
      this.$refs.image5_1.src = "img/face1.jpg";
      this.$refs.image6_1.src = "img/face1.jpg";
      this.$refs.image7_1.src = "img/face1.jpg";
      this.$refs.image8_1.src = "img/face1.jpg";
    },
    selectNormal() {
      const normalRow = document.querySelector('#normalrow');
      const hardRow = document.querySelector('#hardrow');
      
      normalRow.style.display = 'flex';
      hardRow.style.display = 'none';
      this.$refs.image5.src = "img/grey.jpg";
      this.$refs.image6.src = "img/grey.jpg";
      this.$refs.image7.src = "img/face1.jpg";
      this.$refs.image8.src = "img/face1.jpg";
      this.$refs.image5_1.src = "img/grey.jpg";
      this.$refs.image6_1.src = "img/grey.jpg";
      this.$refs.image7_1.src = "img/face1.jpg";
      this.$refs.image8_1.src = "img/face1.jpg";
    },
    selectHard() {
      const normalRow = document.querySelector('#normalrow');
      const hardRow = document.querySelector('#hardrow');
      
      normalRow.style.display = 'flex';
      hardRow.style.display = 'flex';
      this.$refs.image5.src = "img/grey.jpg";
      this.$refs.image6.src = "img/grey.jpg";
      this.$refs.image7.src = "img/grey.jpg";
      this.$refs.image8.src = "img/grey.jpg";
      this.$refs.image5_1.src = "img/grey.jpg";
      this.$refs.image6_1.src = "img/grey.jpg";
      this.$refs.image7_1.src = "img/grey.jpg";
      this.$refs.image8_1.src = "img/grey.jpg";
    },
    checkAndPush(array, element) {
      for (var i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) === JSON.stringify(element)) {
          return;
        }
      }
      array.push(element);
    },
    checkArray() {
      const normalRow = document.querySelector('#normalrow');
      const hardRow = document.querySelector('#hardrow');
      
      if (normalRow.style.display == 'none' && hardRow.style.display == 'none') {
        var i = 0;
        while (i < this.cardimages.length) {
          var x1 = "5";
          var x2 = "6";
          var x3 = "5_1";
          var x4 = "6_1";
          var x5 = "7";
          var x6 = "8";
          var x7 = "7_1";
          var x8 = "8_1";
          if (this.cardimages[i].id == x1 || this.cardimages[i].id == x2 || this.cardimages[i].id == x3 || this.cardimages[i].id == x4 || this.cardimages[i].id == x5 || this.cardimages[i].id == x6 || this.cardimages[i].id == x7 || this.cardimages[i].id == x8) {
            this.cardimages.splice(i, 1);
          } else {
            ++i;
          }
        }
      }

      if (normalRow.style.display == 'flex' && hardRow.style.display == 'none') {
        this.checkAndPush(this.cardimages, this.extraCards.cardimage5);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage5_1);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage6);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage6_1);
        var i = 0;
        while (i < this.cardimages.length) {
          var x1 = "7";
          var x2 = "8";
          if (this.cardimages[i].id == x1 || this.cardimages[i].id == x2) {
            this.cardimages.splice(i, 1);
          } else {
            ++i;
          }
        }
      }

      if (normalRow.style.display == 'flex' && hardRow.style.display == 'flex') {
        this.checkAndPush(this.cardimages, this.extraCards.cardimage5);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage5_1);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage6);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage6_1);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage7);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage7_1);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage8);
        this.checkAndPush(this.cardimages, this.extraCards.cardimage8_1);
      }
    },
    shuffle() {
      let currentIndex = this.cardimages.length;
      
      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this.cardimages[currentIndex], this.cardimages[randomIndex]] = [
          this.cardimages[randomIndex], this.cardimages[currentIndex]
        ];
      }
    },
    flipCard(event) {
      if (this.lockBoard) return;
      
      const clickedCard = event.currentTarget;
      const imgElement = clickedCard.querySelector('img');
      
      if (clickedCard === this.firstCard) return;
      
      switch (imgElement.id) {
        case "image1":
          this.flip1();
          break;
        case "image2":
          this.flip2();
          break;
        case "image3":
          this.flip3();
          break;
        case "image4":
          this.flip4();
          break;
        case "image5":
          this.flip5();
          break;
        case "image6":
          this.flip6();
          break;
        case "image7":
          this.flip7();
          break;
        case "image8":
          this.flip8();
          break;
        case "image1_1":
          this.flip1_1();
          break;
        case "image2_1":
          this.flip2_1();
          break;
        case "image3_1":
          this.flip3_1();
          break;
        case "image4_1":
          this.flip4_1();
          break;
        case "image5_1":
          this.flip5_1();
          break;
        case "image6_1":
          this.flip6_1();
          break;
        case "image7_1":
          this.flip7_1();
          break;
        case "image8_1":
          this.flip8_1();
          break;
      }
      
      if (!this.hasFlippedCard) {
        this.hasFlippedCard = true;
        this.firstCard = clickedCard;
        return;
      }
      
      this.secondCard = clickedCard;
      this.checkForMatch();
    },
    checkForMatch() {
      let isMatch = this.firstCard.querySelector('img').src === this.secondCard.querySelector('img').src;
      
      isMatch ? this.disableCards() : this.unflipCards();
    },
    disableCards() {
      this.firstCard.removeEventListener('click', this.flipCard);
      this.secondCard.removeEventListener('click', this.flipCard);
      this.resetBoard();
    },
    unflipCards() {
      this.lockBoard = true;
      
      setTimeout(() => {
        this.flipBack(this.firstCard.querySelector('img').id);
        this.flipBack(this.secondCard.querySelector('img').id);
        this.resetBoard();
      }, 1000);
    },
    resetBoard() {
      [this.hasFlippedCard, this.lockBoard] = [false, false];
      [this.firstCard, this.secondCard] = [null, null];
    },
    flipBack(id) {
      document.getElementById(id).src = "img/grey.jpg";
    },
    flip1() {
      this.$refs.image1.src = this.cardimages[0].file;
    },
    flip2() {
      this.$refs.image2.src = this.cardimages[1].file;
    },
    flip3() {
      this.$refs.image3.src = this.cardimages[2].file;
    },
    flip4() {
      this.$refs.image4.src = this.cardimages[3].file;
    },
    flip4_1() {
      this.$refs.image4_1.src = this.cardimages[4].file;
    },
    flip3_1() {
      this.$refs.image3_1.src = this.cardimages[5].file;
    },
    flip2_1() {
      this.$refs.image2_1.src = this.cardimages[6].file;
    },
    flip1_1() {
      this.$refs.image1_1.src = this.cardimages[7].file;
    },
    flip6() {
      this.$refs.image6.src = this.cardimages[8].file;
    },
    flip5() {
      this.$refs.image5.src = this.cardimages[9].file;
    },
    flip5_1() {
      this.$refs.image5_1.src = this.cardimages[10].file;
    },
    flip6_1() {
      this.$refs.image6_1.src = this.cardimages[11].file;
    },
    flip7() {
      this.$refs.image7.src = this.cardimages[12].file;
    },
    flip8() {
      this.$refs.image8.src = this.cardimages[13].file;
    },
    flip7_1() {
      this.$refs.image7_1.src = this.cardimages[14].file;
    },
    flip8_1() {
      this.$refs.image8_1.src = this.cardimages[15].file;
    },
    timerStart() {
      const loseModal = new Modal(this.$refs.loseModal);
      const countDownDate = new Date().getTime() + (60 * 1000);

      this.timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.$refs.seconds.innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
          clearInterval(this.timerInterval);
          this.$refs.seconds.innerHTML = "00";
          loseModal.show();
        }

        if (!document.querySelector("img[src$='grey.jpg']")) {
          clearInterval(this.timerInterval);
          this.$refs.seconds.innerHTML = "00";
        }
      }, 10);
    }
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
    clearInterval(this.victoryCheckInterval);
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

#normalrow {
  display: none;
}

#hardrow {
  display: none;
}
</style>