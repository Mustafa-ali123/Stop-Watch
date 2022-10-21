// var sta = document.getElementById("sta");
// var pause = document.getElementById("pas");
// var reset = document.getElementById("res");
var hr = 0;
var min = 0;
var sec = 0;
var timer = false;



function sta() {
    timer = true;
  
    stopwatch();
    //  var star = document.getElementById("sta");
    //  var st = document.getElementById("start");
    //  star.id="start"
};


function pass() {
    timer = false
};


function rest() {
    timer = false;
    hr = 00;
    min = 00;
    sec = 00;
    var h = "0"

    var mint = document.getElementById("min").innerHTML = min + h
    var secon = document.getElementById("sec").innerHTML = sec + h
    var hor = document.getElementById("hor").innerHTML = hr + h

};
// var hr1 = document.getElementById("inp1").value;


function stopwatch() {



    if (timer == true) {


        sec = sec + 1
        var secon = document.getElementById("sec").innerHTML = sec
        var secs = document.getElementById("inp3").value;
        if (secs == sec) {
            sec = sec + 1
            timer = false


        }

        if (sec == 59) {
            sec = 0;
            min = min + 1


            var mint = document.getElementById("min").innerHTML = min
            var mi = document.getElementById("inp2").value;
            
            
            if (mi == min) {
                var secs = document.getElementById("inp3").value;
                 secs = secs
                var secon = document.getElementById("sec").innerHTML = secs
                 
                 var secs = document.getElementById("inp2").value;
                 secs = secs
                var mint = document.getElementById("min").innerHTML = min
                 hr = hr+1
                timer = false

            }
            if (min == 59) {
                hr = hr + 1
                min = 0;
                sec = 0;

                var hor = document.getElementById("hor").innerHTML = hr

                var ho = document.getElementById("inp1").value;
                if (ho == hr) {

                    min = 0;
                    sec = 0;
                    var secs = document.getElementById("inp3").value;
                    secs = secs
                   var secon = document.getElementById("sec").innerHTML = secs
                    min = min + 1 

                    var secs = document.getElementById("inp2").value;
                    secs = secs
                   var mint = document.getElementById("min").innerHTML = min
                    hr = hr+1
                    timer = false


                }
            }

        }

    }
    setTimeout("stopwatch()", 1000)
}




