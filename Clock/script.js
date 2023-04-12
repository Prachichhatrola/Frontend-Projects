function displayTime(){
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session = document.getElementById('session')
  if(hrs>=12){
    session.innerHTML = 'PM';
  }else{
    session.innerHTML = 'AM'
  }

  
  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
  
}

setInterval(displayTime,10)



