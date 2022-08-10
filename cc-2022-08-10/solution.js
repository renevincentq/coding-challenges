// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function timeCorrect(timestring) {
    if (timestring == null) {
        return timestring
    }

    if (timestring === '') {
        return ''
    }

    if (timestring.split(':').length != 3) {
        return null
    }

    let time = timestring.split(':')

    for (const char of time) {
        if (isNaN(char)) {
            return null
        }
    }

    for (let i = 0; i < time.length; i++) {
        time[i] = Number(time[i])
    }

    for (let i = 2; i >= 0; i--) {
        if (time[i] >= 60 && i > 0) {
            time[i - 1]++
            time[i] -= 60
        }
        if (time[i] >= 24 && i === 0) {
            time[i] = time[i] % 24
        }
        if (time[i] < 10) {
            time[i] = '0' + time[i]
        }
    }

    return time.join(':')
}


// can also use Date() and set a date to the time