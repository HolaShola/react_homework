function randomBetween(bottomNumber, topNumber) {
    let result = Math.round((topNumber - bottomNumber) * Math.random() + bottomNumber);
    return result.toString(16);
}

export default function randomColor() {
    let x = randomBetween(0, 255);
    let y = randomBetween(0, 255);
    let z = randomBetween(0, 255);
    let str = '#' + x + y + z;
    return str;
}