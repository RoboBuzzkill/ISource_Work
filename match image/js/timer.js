
let timerstart = function () {
    const Lose = new bootstrap.Modal('#losemodal');
    const countDownDate = new Date().getTime() + (60 * 1000);

    const x = setInterval(function () {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("seconds").innerHTML = "00";
            Lose.show();
        }

        if (!document.querySelector("img[src$='grey.jpg']")) {
            clearInterval(x);
            document.getElementById("seconds").innerHTML = "00";
        }

    }, 10);
}