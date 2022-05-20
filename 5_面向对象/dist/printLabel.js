"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color0: 'black' });
let p1 = { x: 10, y: 20 };
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
