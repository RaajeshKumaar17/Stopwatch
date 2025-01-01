let [seconds,minutes,hours,milliseconds]=[0,0,0,0]
let displaytime=document.getElementById("displaytime")
let timer=null;

function stopwatch(){
  milliseconds++;
  if(milliseconds==100){    //after 100 second value increases
    milliseconds=0
    seconds++;
  if(seconds==60){
    seconds=0;
    minutes++;             // after 60 second minute value increases
    if(minutes==60){
      minutes=0;
      hours++
    }
  }
}
  let h=hours<10?"0"+hours:hours
  let m=minutes<10?"0"+minutes:minutes
  let s=seconds<10?"0"+seconds:seconds
  let ms=milliseconds<10?"0"+milliseconds:milliseconds

  displaytime.innerHTML=h+":"+m+":"+s+":"+ms;
}
function watchstart(){
  if(timer!=null){
    clearInterval(timer);
  }
  timer=setInterval(stopwatch,10)
}

function watchstop (){
  clearInterval(timer) ; 

}
function watchreset (){
    clearInterval(timer);
    [seconds,minutes,hours,milliseconds]=[0,0,0,0];
    displaytime.innerHTML="00:00:00:00";

}