// STOLEN FROM STACKOVERFLOW I AM SO SORRY
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
// modified for modern javascript
function toHHMMSS(sec_num) {
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num % 3600) / 60);
    let seconds = sec_num % 60;

    if (hours   < 10) { hours = hours.toString().padStart(2, "0"); }
    if (minutes < 10) { minutes = minutes.toString().padStart(2, "0"); }
    if (seconds < 10) { seconds = seconds.toString().padStart(2, "0"); }

    return hours+':'+minutes+':'+seconds;
}

// JQUERY IS GONE FOREVER WE CAN NOW CHEER
const timeContainer = document.querySelector("#hms");

let time;
let secselapsed = -1;

fetch("https://worldtimeapi.org/api/timezone/etc/gmt").then(async req => {
    console.log("noxxy woxxy was here");
    console.log("%c sci was here too and he left disappointed ", "background: #600; color: white; font-weight: 700;");

    const data = await req.json();
    time = Date.parse(data.utc_datetime);

    setTime();
})

function setTime() {
    setInterval(_=>{
        secselapsed++;
        let endtime = Date.parse("2020-08-09T14:00:00.000000+00:00");
        let difference = Math.floor(((endtime - time)/1000)-secselapsed);

        if (difference > 0) {
            timeContainer.textContent = toHHMMSS(difference);
        } else {
            timeContainer.textContent = "TIME UP!";
        }
    }, 1000);
}
