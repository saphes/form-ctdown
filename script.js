// STOLEN FROM STACKOVERFLOW I AM SO SORRY
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
function toHHMMSS(tstr) {
    var sec_num = parseInt(tstr, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

var time
var secselapsed = -1;

function ready() {
    console.log("noxxy woxxy was here");

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            time = Date.parse(this.responseText);
            setTime();
        }
    };

    xmlhttp.open("GET", "https://kian-time.builtwithdark.com/", true);
    xmlhttp.send();
}

function setTime() {
    setInterval(_=>{
        secselapsed++;
        let endtime = Date.parse("2021-02-07T14:00:00.000000+00:00");
        let tstr = ""+(((endtime - time)/1000)-secselapsed);
        if (parseInt(tstr) > 0) {
            $("#hms").text(toHHMMSS(tstr));
        } else {
            $("#hms").text("TIME UP!");
        }
    }, 1000);
}
