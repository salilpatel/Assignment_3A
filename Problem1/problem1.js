function myTimer() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    document.getElementById("date").innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }

var myInterval;
myInterval = setInterval(myTimer, 1000);


function myStart(){ 
    myInterval = setInterval(myTimer, 1000);
  }

function myStop() {
    clearInterval(myInterval);
  }
