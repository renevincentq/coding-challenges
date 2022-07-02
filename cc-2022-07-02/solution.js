// Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.

// One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
// Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.
// toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
// toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
// There will be no seconds in the tests. We'll neglect them for the purpose of this kata.

// Examples:
// toIndustrial(1) => 0.02
// toIndustrial("1:45") => 1.75
// toNormal(0.33) => "0:20"

function toIndustrial(time){
    let minutes;
    if (typeof time === 'string') {
      let arr = time.split(':');
      minutes = Number(arr[0]) * 60 + Number(arr[1]);
    } else {
      minutes = time;
    }
    return Number((minutes / 60).toFixed(2))
}
  
function toNormal(time){
    let arr = String(time.toFixed(2)).split('.')
    arr[1] = String(Math.round((arr[1]) / 100 * 60)).padStart(2, '0')
    return arr.join(':')
}