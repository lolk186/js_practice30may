function showTime(){
let inttime = document.getElementById("dateTime")
var time = new Date();
inttime.innerHTML = time
}
setInterval(showTime,1000)



