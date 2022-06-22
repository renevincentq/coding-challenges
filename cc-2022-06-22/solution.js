// Step through my green glass door.

// You can take the moon, but not the sun.

// You can take your slippers, but not your sandals.

// You can go through yelling, but not shouting.

// You can't run through fast, but you can run with speed.

// You can take a sheet, but not your blanket.

// You can wear your glasses, but not your contacts.

// Have you figured it out? Good! Then write a program that can figure it out as well.

function stepThroughWith(s) {
    let door = false;
    s.split('').forEach((a, b, c) => a == c[b + 1] ? door = true : null);
    return door
}

// better to use regexp test