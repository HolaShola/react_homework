/*function randomBetween(bottomNumber, topNumber) {
    return Math.round((topNumber - bottomNumber) * Math.random() + bottomNumber);
}

function randomColor() {
    var x = randomBetween(0, 255).toString(16);
    var y = randomBetween(0, 255).toString(16);
    var z = randomBetween(0, 255).toString(16);
    var str = '#' + x + y + z;
    return str;
}*/

export default function randomColor() {
    var x = Math.round(255 * Math.random()).toString(16);
    var y = Math.round(255 * Math.random()).toString(16);
    var z = Math.round(255 * Math.random()).toString(16);
    var str = '#' + x + y + z;
    return str;
}