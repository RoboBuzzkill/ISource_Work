<template>
  <div class="practice-container">
    <header class="siteheader">
      <ul class="navbar">
        <li class="navbar__item"><a class="navbar__item--welcome" href="#WELCOME">WELCOME</a></li>
        <li class="navbar__item"><a class="navbar__item--whoweare" href="#WHO-ARE-WE">WHO WE ARE</a></li>
        <li class="navbar__item"><a class="navbar__item--whatwedo" href="#WHAT-WE-DO">WHAT WE DO</a></li>
        <li class="navbar__item"><a class="navbar__item--getintouch" href="#GET-IN-TOUCH">GET IN TOUCH</a></li>
      </ul>
    </header>
    <main>
      <section id="WELCOME" class="card card--welcome">
        <div class="card--welcome__details">
          <h1 class="card__header"><b>Hyperspace</b></h1>
          <p class="card__text card__text--welcome">Just another fine responsive site template <br class="card__break"> designed by <u> HTML5 UP</u> and
            released for free <br class="card__break"> under the <u> Creative Commons.</u></p><br>
          <button class="button button--welcome">Learn more</button>
        </div>
      </section>
      <section id="WHO-ARE-WE" class="card">
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/grey.jpg" alt="image 1">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">Sed ipsum dolor</h3>
            <p class="card__text card__text--whoweare">Phalus convallis elit id ullamcorper aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa</p>
            <button class="button button--whoweare">Learn more</button>
          </div>
        </div>
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/grey.jpg" alt="image 2">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">Sed ipsum dolor</h3>
            <p class="card__text card__text--whoweare">Phalus convallis elit id ullamcorper aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa</p>
            <button class="button button--whoweare">Learn more</button>
          </div>
        </div>
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/grey.jpg" alt="image 3">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">Sed ipsum dolor</h3>
            <p class="card__text card__text--whoweare">Phalus convallis elit id ullamcorper aaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa</p>
            <button class="button button--whoweare">Learn more</button>
          </div>
        </div>
      </section>
      <section id="WHAT-WE-DO" class="card">
        <div class="card--whatwedo__details">
          <h2 class="card__header card__header--small">What we do</h2>
          <p class="card__text card__text--whatwedo">
            aaaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaaa aaaaaaaaaa
          </p>
        </div>
        <div class="card card--array">
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-cloud"></i><br>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-lock"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaa</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-cog"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaaaaaaa aaaaa aaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaa</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-phone"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaa aaaaaaaaaa aaaaaaaaaaaa aaaaa aaaaaaaaaaa aaaaaaaaaa</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-link"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaaaaaaa aaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaaa</p>
            </div> 
          </div>
          <div class="card--array__bordered">
            <i class="glyphicon glyphicon-heart-empty"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">aaaaaaaa</h3>
              <p class="card__text">
                aaaaa aaaaaaaaa aaaaa aaaaaaaaaaa aaa aaaaaaa aaaaaaaa aaa</p>
            </div>
          </div>
          <button class="button button--whatwedo">Learn more</button>
        </div>
      </section>
      <section id="GET-IN-TOUCH" class="card card--getintouch">
        <h2 class="card__header card__header--small">Get in touch</h2>
        <p class="card__text card__text--getintouch">
          aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa
        </p>
        <div class="card--getintouch__details">
          <div class="card--getintouch__fields">
            <form class="card__form" action="" >
              <div class="card__form--names">
                <div class="card__form--tableelement">
                  <label class="card__label" for="name"><b>Name</b></label>
                  <input class="card__input" id="name" name="name" type="text">
                </div>
                <div class="card__form--tableelement">
                  <label class="card__label" for="Email"><b>Email</b></label>
                  <input class="card__input" id="Email" name="Email" type="text">
                </div>
              </div>
              <label class="card__label" for="Message"><b>Message</b></label>
              <input class="card__input card__input--message" id="Message" name="Message" type="text"><br>
              <button class="button button--getintouch">Send Message</button>
            </form>
          </div>
          <div class="card card--information">
            <div class="card card--information__details">
              <h3 class="card__header card__header--smaller">Address</h3>
              <address class="card__text">12345 Somewhere Road #654 <br> Nashville, TN 00000-0000 <br> USA
              </address>
              <h3 class="card__header card__header--smaller">Email</h3>
              <p class="card__text"><u>user@untitled.tld</u></p>
              <h3 class="card__header card__header--smaller">Phone</h3>
              <p class="card__text">(000) 000-0000</p>
              <h3 class="card__header card__header--smaller">Social</h3>
              <p class="card__text">
                <a href="#" class="fa fa-twitter"></a>&nbsp;
                <a href="#" class="fa fa-facebook"></a>&nbsp;
                <a href="#" class="fa fa-github"></a>&nbsp;
                <a href="#" class="fa fa-instagram"></a>&nbsp;
                <a href="#" class="fa fa-linkedin"></a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="card card--footer">
      <p class="card__text card__text--footermobile">&copy; Untitled All rights reserved <br><br> Design <u>HTML5 UP</u></p>
      <p class="card__text card__text--footertablet">&copy; Untitled All rights reserved &nbsp; | &nbsp; Design <u>HTML5 UP</u></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PracticeView'
}
</script>

<style scoped>


.practice-container {
  /* Your CSS from style.css goes here */
  font-family: Arial, sans-serif;
}

.siteheader {
  display: none;
}

.card__break{
  display: none;
}

image {
  width: 100%;
  height: auto;
}

.card--header {
  margin-bottom: -45px;
}

.card--footer {
  padding-top: 100px;
  padding-bottom: 100px;
}

.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.navbar__item {
  display: inline;
}

#WELCOME {
  background-color: purple;
}

#WHAT-WE-DO {
  background-color: pink;
}

#GET-IN-TOUCH {
  background-color: violet;
}

.card--footer {
  background-color: blueviolet;
}

.card {
  overflow: auto;
  text-align: left;
}

.card--welcome {
  min-height: 600px;
}

.card--whoweare {
  background-color: blue;
  overflow: auto;
  min-height: 600px;
}

.card--whatwedo {
  min-height: 600px;
}

.card--getintouch {
  padding-bottom: 60px;
}

.card--array {
  margin-bottom: 80px;
  margin-top: 80px;
  margin-left: 3%;
  margin-right: 3%;
}

.card--array__bordered {
  border-style: solid;
  border-width: 2px;
  border-color: rgb(179, 179, 179);
  margin-top: -1px;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  padding-bottom: 20px;
  text-align: left;
}

.fa {
  color: rgb(182, 182, 182);
  font-size: 80px;
  width: 100px;
}

.card__text {
  color: rgb(182, 182, 182);
  margin-left: 50px;
  margin-top: 35px;
  font-size: 40px;
  word-wrap: break-word;
}

.card__text--footermobile {
  margin-right: 50px;
}

.card__text--footertablet {
  display: none;
}

.card__header {
  color: white;
  margin-left: 50px;
  padding-top: 20px;
  font-size: 70px;
  margin-right: 50px;
  word-wrap: break-word;
}

.card__header--small {
  font-size: 50px;
  font-weight: bold;
}

.card__header--smaller {
  font-size: 40px;
  font-weight: bold;
}

.card__img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  overflow: auto;
}

.button {
  color: white;
  text-decoration: none;
  border-style: solid;
  border-radius: 80px;
  border-color: rgb(179, 179, 179);
  margin-bottom: 10px;
  width: 85vw;
  font-size: 40px;
  padding-top: 35px;
  padding-bottom: 35px;
  margin-left: 25px;
  margin-top: 50px;
  margin-bottom: 100px;
}

.button--welcome {
  background-color: purple;
}

.button--whoweare {
  background-color: blue;
}

.button--whatwedo {
  background-color: pink;
  margin-top: 80px;
}

.button--getintouch {
  margin-top: 80px;
  margin-left: 35px;
  background-color: violet;
}

.card__input {
  text-decoration: none;
  border-style: solid;
  border-radius: 5px;
  border-color: rgb(179, 179, 179);
  background-color: rgb(241, 141, 241);
  width: 75vw;
  height: 100px;
  margin-left: 50px;
}

.card__input--message {
  height: 500px;
}

.card__label {
  display: block;
  color: white;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 40px;
  font-weight: bold;
}

.glyphicon {
  margin-top: 50px;
  margin-left: 50px;
  font-size: 100px;
}

.card--welcome__details {
  max-width: 600px;
}

.card__form::after {
  content: "";
  height: 2px;
  width: 90%;
  background-color: rgb(179, 179, 179);
  position: absolute;
  left: 30px;
  bottom: 0;
}

.card__form {
  position: relative;
}

.card__text--welcome {
  margin-right: 50px;
}

.card__text--whoweare {
  margin-right: 50px;
}

.card__text--whatwedo {
  margin-right: 50px;
}

.card__text--getintouch {
  margin-right: 50px;
}

.card__text--array {
  margin-right: 50px;
}

@media only screen and (min-width: 762px) {
  .card__break{
    display: unset;
  }

  .button {
    width: 15vw;
    font-size: 1.5vw;
    border-radius: 20px;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-left: 50px;
  }

  .card__text {
    font-size: 2vh;
  }

  .card__header {
    font-size: 5vh;
  }

  .card__header--small {
    font-size: 4vh;
  }

  .card__header--smaller {
    font-size: 2.5vh;
  }

  .card__label {
    font-size: 2.5vh;
  }

  .card--whoweare__row {
    display: flex;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    min-height: 400px;
    overflow: auto;
    border-left: none;
    border-right: none;
  }

  .card__img {
    width: 40%;
    min-height: 400px;
    object-fit: cover;
  }

  .card--whoweare {
    width: 60%;
    min-height: 400px;
  }

  .card--array {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card--array__bordered {
    display: flex;
  }

  .glyphicon {
    margin-top: 100px;
    margin-left: 40px;
    font-size: 40px;
  }

  .button--whatwedo {
    margin-top: 40px;
    margin-left: 10px;
  }

  .card--welcome__details {
    margin-top: 20vh;
  }

  .card__input {
    width: 25vw;
    height: 5vh;
  }

  .card__input--message {
    width: 55vw;
    height: 20vh;
  }

  .card__form--names {
    display: table;
  }

  .card__form--tableelement {
    display: table-cell;
  }

  .fa {
    font-size: 20px;
    width: 30px;
  }

  .card--getintouch__details {
    display: flex;
  }

  .card--information {
    margin-left: 15vw;
  }

  .button--getintouch {
    margin-top: 40px;
  }

  .card__text--footermobile {
    display: none;
  }

  .card__text--footertablet {
    display: unset;
  }

  .siteheader {
    display: block;
    background-color: rgb(100, 31, 163);
  }

  .navbar {
    padding: 1vh;
  }

  .navbar__item {
    padding: 1vh;
  }

  a {
    color: rgb(179, 179, 179);
  }

  a:hover {
    color: white;
    text-decoration: none;
    border-bottom: 4px solid violet;
    padding-bottom: 18px;
  }

  .card__form::after {
    content: "";
    height: 100%;
    width: 2px;
    border-bottom: 2px solid rgb(179, 179, 179);
    position: absolute;
    left: 120%;
    top: 0;
  }
}

@media only screen and (min-width: 992px) {
  .navbar {
    margin: 0;
    padding-top: 100px;
    width: 300px;
  }

  .navbar__item {
    display: block;
    text-align: right;
    margin-right: 40px;
    margin-bottom: 30px;
  }

  main {
    margin-left: 300px;
  }

  a:hover {
    padding-bottom: 10px;
    color: white;
    text-decoration: none;
    border-bottom: 2px solid violet;
  }

  .navbar__item--welcome {
    padding-left: 130px;
    border-bottom: 2px solid rgb(116, 74, 155);
    padding-bottom: 10px;
  }

  .navbar__item--whoweare {
    padding-left: 107px;
    border-bottom: 2px solid rgb(116, 74, 155);
    padding-bottom: 10px;
  }

  .navbar__item--whatwedo {
    padding-left: 108px;
    border-bottom: 2px solid rgb(116, 74, 155);
    padding-bottom: 10px;
  }

  .navbar__item--getintouch {
    padding-left: 100px;
    border-bottom: 2px solid rgb(116, 74, 155);
    padding-bottom: 10px;
  }

  .card--getintouch__fields {
    min-height: 600px;
  }

  .card--information {
    min-height: 600px;
  }

  .card__input {
    width: 90%;
  }

  .card__input--message {
    width: 95%;
  }

  .card--footer {
    margin-left: 300px;
  }

  .siteheader{
    position: fixed;
    height: 100%;
    overflow: auto;
  }
}
</style>