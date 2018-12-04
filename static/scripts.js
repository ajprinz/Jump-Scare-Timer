

//Prep
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var hh;
var mm;
var ss;
var tick;
var buttonCounter = 0;

var body = document.querySelector('body');
var form = document.querySelector('form');
var timer = document.getElementById('timer');
var btn = document.querySelectorAll('button');



function start() {

    body.style.background = '#000';
    form.style.display = 'none';
    timer.style.color = '#fff';
    btn[0].style.color = '#fff';
    btn[1].style.color = '#fff';

    //Prevent button from multiple clicks which ruin timing
    if (buttonCounter == 1) {
        return;
    } else {

        buttonCounter = 1;

        //Get input values
        hh = document.getElementById('hours').value;
        mm = document.getElementById('minutes').value;
        ss = document.getElementById('seconds').value;

        //Perform task every second
        tick = setInterval(function() {
                //Clock functionality
                ss++;
                if (ss < 10) {
                    String(ss);
                    seconds.value = '0' + ss;
                } else if (ss > 59) {
                    mm++;
                    ss = 0;
                    minutes.value = '0' + mm;
                    seconds.value = '0' + ss;
                    if (mm > 59) {
                        hh++;
                        mm = 00;
                        hours.value = '0' + hh;
                        minutes.value = '0' + mm;
                    }
                } else {
                    seconds.value = ss;
                }

                //Compound values to strings for comparison
                //Added whitespace to match times array item
                var currentTime1 = String( mm + ':' + (ss + 3) + ' ');
                var currentTime2 = String( hh + ':' + mm + ':' + (ss + 3) + ' ');

                //Compare clock to jump scare times
                for (var i = 0; i < times.length; i++) {

                    if (currentTime1 == times[i] || currentTime1 == '0' + times[i] || currentTime2 == times[i] || currentTime2 == '0' + times[i]) {
                        console.log('red');
                        body.style.background = 'rgb(255, 17, 0)';
                        setTimeout(function() {body.style.background = '#000';} ,4000);
                    } else {

                    }
                }


        }, 1000);
    }
}

function stop() {

    body.style.background = '#fff';
    form.style.display = 'block';
    timer.style.color = '#000';
    btn[0].style.color = '#000';
    btn[1].style.color = '#000';

    //Prevent button from multiple clicks which ruin timing
    if (buttonCounter == 0) {
        return
    } else {
        buttonCounter = 0;
        clearInterval(tick);
    }
}
