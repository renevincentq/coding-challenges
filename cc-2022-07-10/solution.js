// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// How many kookaburras are there?

// Hint
// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3
// ^ Kata Note : No validation is necessary; only valid input will be passed :-)

var kookaCounter = function(laughing) {
    let arr = laughing.split('');
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2).join(''));
    }
    
    return result.filter((a, b, c) => a == c[b - 1] ? '' : a).length
}

// use match with regex, the way i tried wasnt working on codewars for some reason so I used a different method