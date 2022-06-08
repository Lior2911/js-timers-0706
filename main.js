// function printTimer(){
// setInterval(()=>{
//   document.write("timer")
// },4000)
// }
// printTimer()

// var counter = 0;
// function printCounter(){
//   setInterval(()=>{
//     document.write(counter++)
//   },6000)
// }
// printCounter()\

// var intervalId = 0 ;
// var h2_ = document.createElement("h2")
// document.body.append(h2_)
// function printTimer2(){
//  intervalId =  setInterval(()=>{
//  h2_.innerText+= "i love timers"
//   },5000)
// }
// printTimer2()

// function stopInterval(){
//   clearInterval(intervalId)
// }


// var todayDate = new Date();
// var nowHour = todayDate.getHours()+":"+todayDate.getMinutes()+":"+todayDate.getSeconds()+"\n";
// function getTime(){
//   setInterval(()=>{
//     h2_.innerText += nowHour
//   },1000)
// }
// getTime()

var intervalId;
var time =0;

function printTime(){
  var myTime = new Date();

  var secondsFromDate = myTime.getSeconds();
  var secondsFromInput = parseInt(timeInput.value.substr(6))

  var minFromDate = myTime.getMinutes();
  var minFromInput = parseInt(timeInput.value.substr(3,2))

  var hourFromDate = myTime.getHours();
  var hourFromInput = parseInt(timeInput.value.substr(0,2))
  intervalId =setInterval(()=>{
    timeElement.innerHTML=
    hourFromDate+":"+minFromDate +":"+secondsFromDate++;
    if(secondsFromDate==60){
      secondsFromDate = 0;
      minFromDate ++;
      if(minFromDate == 60){
        minFromDate  = 0;
        hourFromDate++
      }
      if(hourFromDate==24){
        hourFromDate=0;
      }
    }
    if(myTime.getTime()==myTime.setHours(hourFromInput,minFromInput,secondsFromInput)){
      clearInterval(intervalId)
    }
  },1000)



}
