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
      <div class="background__card--welcome">
      <section id="WELCOME" class="card card--welcome">
        <div class="card--welcome__details">
          <h1 class="card__header"><b>Timothy Juzevski</b></h1>
          <p class="card__text card__text--welcome">A mockup CV made by me<br class="card__break"> to try out different css and html code
             <br class="card__break"> and get some bearings</p><br>
          <button class="button button--welcome"><a class="button__link" href="#WHO-ARE-WE">Learn more</a></button>
        </div>
      </section>
    </div>
    <div class="background__card--whoweare">
      <section id="WHO-ARE-WE" class="card">
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/robot.jpg" alt="robot">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">An Engineer</h3>
            <p class="card__text card__text--whoweare">A adept user and maker of robotics and machinery</p>
            <button class="button button--whoweare"><a class="button__link" href="https://www.youtube.com/watch?v=cTsxRtNJFMo">Video example</a></button>
          </div>
        </div>
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/webexample.jpg" alt="webexample">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">A Developer</h3>
            <p class="card__text card__text--whoweare">A skilled programmer with versatile knowledge of multiple coding languages</p>
            <button class="button button--whoweare"><router-link class="link button__link" :to="{name: 'home'}">Explore more</router-link></button>
          </div>
        </div>
        <div class="card--whoweare__row">
          <img class="card__img" src="/img/gameexample.jpg" alt="gameexample">
          <div class="card--whoweare">
            <h3 class="card__header card__header--small">A Creator</h3>
            <p class="card__text card__text--whoweare">A creative mind who has created many projects from games, to websites </p>
            <button class="button button--whoweare"><a class="button__link" href="https://github.com/RoboBuzzkill">See more</a></button>
          </div>
        </div>
      </section>
    </div>
      <div class="background__card--whatwedo">
      <section id="WHAT-WE-DO" class="card">
        <div class="card--whatwedo__details">
          <h2 class="card__header card__header--small">What we do</h2>
          <p class="card__text card__text--whatwedo">
            Here is a list of some of the things I've done over the years
          </p>
        </div>
        <div class="card card--array">
          <div class="card--array__bordered">
            <i class="fa fa-cloud"></i><br>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">Front-end Development</h3>
              <p class="card__text">
                Multiple website done using HTML, CSS, and Javascript</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="fa fa-gamepad"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">Video Game Development</h3>
              <p class="card__text">
                A selection of video games from art simulation, to tank battles, and VR experiences, made using Unity and Python</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="fa fa-cog"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">Robotics</h3>
              <p class="card__text">
                A camera mounted hexapod controlled by both remote and smartphone</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="fa fa-phone"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">Mobile applications</h3>
              <p class="card__text">
                Mobile apps such as a GPS and a weather tracker</p>
            </div>
          </div>
          <div class="card--array__bordered">
            <i class="fa fa-link"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">YAML converter</h3>
              <p class="card__text">
                A application that takes YAML code and creates websites with real time editing</p>
            </div> 
          </div>
          <div class="card--array__bordered">
            <i class="fa fa-pencil"></i>
            <div class="card--array__details">
              <h3 class="card__header card__header--smaller">Modeling and Animation</h3>
              <p class="card__text">
                High quality animations and models made in blender for use in my other projects</p>
            </div>
          </div>
          <button class="button button--whatwedo"><a class="button__link" href="https://github.com/RoboBuzzkill">See more</a></button>
        </div>
      </section>
    </div>
    <div class="background__card--getintouch">
      <section id="GET-IN-TOUCH" class="card card--getintouch">
        <h2 class="card__header card__header--small">Get in touch</h2>
        <p class="card__text card__text--getintouch">
          If you would like to get in touch with me, write you name and email, along with your own message below, and I'll write back to you. Or, contact me through my other sources listed below 
        </p>
        <div class="card--getintouch__details">
          <div class="card--getintouch__fields">
            <form class="card__form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="aa6317d5-6306-424d-bddd-d393d6325c1a">
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
              <textarea class="card__input card__input--message" id="Message" name="Message" rows="10" cols="50"></textarea><br>
              <button type="submit" class="button button--getintouch">Send Message</button>
            </form>
          </div>
          <div class="card card--information">
            <div class="card card--information__details">
              <h3 class="card__header card__header--smaller">Address</h3>
              <address class="card__text">Jorgov Kamen 1 <br> Bitola, 7000 <br> MK
              </address>
              <h3 class="card__header card__header--smaller">Email</h3>
              <p class="card__text"><u>timothyjuzevski@gmail.com</u></p>
              <h3 class="card__header card__header--smaller">Phone</h3>
              <p class="card__text">(077) 432-373</p>
              <h3 class="card__header card__header--smaller">Social</h3>
              <p class="card__text">
                <a href="#" class="fa fa-twitter social"></a>&nbsp;
                <a href="#" class="fa fa-facebook social"></a>&nbsp;
                <a href="#" class="fa fa-github social"></a>&nbsp;
                <a href="#" class="fa fa-instagram social"></a>&nbsp;
                <a href="#" class="fa fa-linkedin social"></a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    <div class="background__card--footer">
    <footer class="card card--footer">
      <p class="card__text card__text--footermobile">&copy; Untitled All rights reserved <br><br> Design <u>HTML5 UP</u></p>
      <p class="card__text card__text--footertablet">&copy; Untitled All rights reserved &nbsp; | &nbsp; Design <u>HTML5 UP</u></p>
    </footer>
  </div>
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

.button__link{
  text-decoration: none;
  color: rgb(182, 182, 182);
}
.button__link:hover{
  text-decoration: none;
  border-bottom: none;
  color: white;
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
.background__card--welcome{
  background-color: purple;
}

#WHAT-WE-DO {
  background-color: rgb(242, 0, 255);
}
.background__card--whatwedo{
  background-color: rgb(242, 0, 255);
}
#GET-IN-TOUCH {
  background-color: violet;
}
.background__card--getintouch{
  background-color: violet;
}
.card--footer {
  background-color: blueviolet;
}
.background__card--footer{
  background-color: blueviolet;
}

.card--information__details{
  background-color: violet;
  border: none;
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

.background__card--whoweare{
  background-color: blue;
}

.card--whatwedo {
  min-height: 600px;
}

.card--getintouch {
  padding-bottom: 60px;
}

.card--array {
  border: none;
  background-color: rgb(242, 0, 255);
  margin-bottom: 80px;
  margin-top: 80px;
  margin-left: 3%;
  margin-right: 3%;
}

.card--array__bordered {
  background-color: rgb(242, 0, 255);
  border-style: solid;
  border-width: 2px;
  border-color: rgb(179, 179, 179);
  margin-top: -1px;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  padding-bottom: 20px;
  text-align: left;
}

.social {
  color: rgb(182, 182, 182);
  font-size: 80px;
  width: 100px;
  text-decoration: none;
}

.social:hover{
  border-bottom: none;
  text-decoration: none;
  padding-bottom: 0;
  margin-bottom: 0;
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
  color: rgb(182, 182, 182);
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

.button:hover{
  color: white;
}

.button--welcome {
  background-color: purple;
}

.button--whoweare {
  background-color: blue;
}

.button--whatwedo {
  background-color: rgb(242, 0, 255);
  margin-top: 80px;
}

.button--getintouch {
  margin-top: 80px;
  margin-left: 35px;
  background-color: violet;
}

.card__input {
  color: rgb(182, 182, 182);
  text-decoration: none;
  border-style: solid;
  border-radius: 5px;
  border-color: rgb(179, 179, 179);
  background-color: rgb(241, 141, 241);
  width: 75vw;
  height: 100px;
  margin-left: 50px;
  padding-left: 10px;
}

.card__input:focus{
  
}

.card__input--message {
  height: 500px;
  padding-top: 4px;
}

.card__label {
  display: block;
  color: white;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 40px;
  font-weight: bold;
}

.fa {
  margin-top: 50px;
  margin-left: 50px;
  font-size: 50px;
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

  .fa {
    margin-top: 15px;
    margin-left: 20px;
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

  .social {
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
  .navbar__item--welcome{
    text-decoration: none;
  }
  
  .navbar__item--whoweare{
        text-decoration: none;
  } 

  .navbar__item--whatwedo{
        text-decoration: none;
  }

  .navbar__item--getintouch{
        text-decoration: none;
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
    left: 110%;
    top: 0;
  }
}

@media only screen and (min-width: 992px) {

  .card__form::after{
    left: 125%;
  }

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
    text-decoration: none;
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
    top: 0;
  }

  .card--information__details{
  padding-right: 50px; 
}
}
</style>