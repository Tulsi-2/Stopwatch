let m = 0;
let s = 0;
let h = 0;
let timerId;


function setMinute() {
m +=1;
if(m<10){
document.getElementById('minute').innerText = '0'+m;

}
else{
    document.getElementById('minute').innerText = m;
}
} 
function setSecond() {
    s += 1;
    if(s == 60) {
        s = 0;
        setMinute();
    }
}

if(s<10){
    document.getElementById('second').innerText = '0' +s;

}
else{
    document.getElementById('second').innerText =s;
}

function startStopWatch() {
    h +=1;
    if( h== 100){
        h = 0;
        setSecond();
    }
    if(h<10){
        document.getElementById('hos').innerText= '0' +h;
    }
    else{
        document.getElementById('hos').innerText= h;
    }
}

function startWatch() {
    timerId = setInterval(startStopWatch, 10);
}
function stopWatch() {
    clearInterval(timerId);
}
function resetWatch() {
    stopWatch();
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('hos').innerText = '00';

    h = 0;
    s = 0;
    m = 0;
}