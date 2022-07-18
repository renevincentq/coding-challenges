// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    let word = txt
    word = word.replaceAll('a', '4');
    word = word.replaceAll('A', '4');
    word = word.replaceAll('e', '3');
    word = word.replaceAll('E', '3');
    word = word.replaceAll('l', '1');
    return word
}

// regex version
// txt.replace(/a/gi, `4`).replace(/e/gi, `3`).replace(/l/g, `1`);