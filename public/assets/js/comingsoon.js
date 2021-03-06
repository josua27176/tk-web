// YYYY-MM-DDTHH:MM:SSZ
const releaseDate = new Date("2021-03-08T19:00:00Z");
const countdown = document.getElementById("countdown");

function timer() {
    let seconds = Math.round((releaseDate - Date.now()) / 1000);
    let times = {
        "years": 31536000,
        "months": 2592000,
        "weeks": 604800,
        "days": 86400,
        "hours": 3600,
        "minutes": 60,
        "seconds": 1
    };
    let values = [];

    for (let name in times) {
        let length = times[name];

        if (seconds > length) {
            let quotient = Math.floor(seconds / length);
            seconds = seconds % length;
            if (quotient == 1) {
                values.push("1 " + name.slice(0, -1));
            } else {
                values.push(quotient + " " + name);
            }
        }
    }

    countdown.innerText = values.join(", ");
}

setInterval(timer, 1000);
timer();
