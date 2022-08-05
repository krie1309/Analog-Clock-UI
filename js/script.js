// for clock
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let dates = document.getElementById('dates');
let months = document.getElementById('month');
let years = document.getElementById('year');

setInterval( () => {    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let session = h < 12 ? "AM" : "PM";
    
    // convert 24hr to 12 hours
    if(h>12) h-=12;
    // add zero before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = session;


    // when strokearray=440 then only 360deg
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;   //12 hours
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;   //60 min
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;   //60 sec
    
    hr_dot.style.transform = `rotate(${ h*30 }deg)`;    //360/12 = 30
    min_dot.style.transform = `rotate(${ m*6 }deg)`;    //360/60 = 6
    sec_dot.style.transform = `rotate(${ s*6 }deg)`;    //360/60 = 6


    var daysWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    var today = new Date();
    var todayday = today.getDay();
    var date = today.getDate();
    var mont = today.getMonth();
    var year = today.getFullYear();

    dates.innerHTML = date;
    months.innerHTML = month[mont];
    years.innerHTML = year;

    var dayactive = document.getElementById(''+daysWeek[todayday]+'');
    dayactive.style.color = '#fff';
    // dayactive.classList.add('animClass');

}, 1000);
