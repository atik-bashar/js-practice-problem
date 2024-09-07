//  12 inch 1 feet 

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

// ignore this one

function inchToFeet2(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


//  mile to kilo meter 

function mileKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const output = mileKilometer(25);
// console.log(output);


// kilo meter to mile 

function kilometerMile(kilo){
    const mile = kilo * 0.62137119;
    return mile;
}

const output2 = kilometerMile(234);
console.log(output2);