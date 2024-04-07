/*
  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
*/

function humanReadable (seconds) {
  var minutes = 0;
  var hours = 0;
  var time = '';
  
  minutes = Math.floor(seconds/60);
  hours = Math.floor(minutes/60);
  minutes = minutes % 60;
  seconds = seconds % 60;
  
  seconds = seconds.toString();
  minutes = minutes.toString();
  hours = hours.toString();
  
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  if (hours < 10) {
    hours = `0${hours}`
  }
  
  time = `${hours}:${minutes}:${seconds}`
  return time;
}

/*
Optimized solution

let hours = parseInt(seconds / (60*60)).toString().padStart(2, '0');

let mins = parseInt(seconds / 60 % 60).toString().padStart(2, '0');

let secs = (seconds % 60).toString().padStart(2, '0')

return `${hours}:${mins}:${secs}`;

*/


  console.log(humanReadable(1));
  console.log(humanReadable(45));
  console.log(humanReadable(90));
  console.log(humanReadable(45296));
  console.log(humanReadable(86400));
  console.log(humanReadable(35999));