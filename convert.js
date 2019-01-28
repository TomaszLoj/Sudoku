const sudokuTable = require("./sudokutable");

function MainEntry(i, v, r, c, s) {
    (this.index = i),
    (this.value = v),
    (this.row = r),
    (this.column = c);
    (this.square = s);
}
function getRow(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].row = Math.floor(i / 9);
    }
}

function getColumn(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].column = i - (9 * (Math.floor(i / 9)));
    }
}

function getSquare(data) {
    let j = 0;
    let k = 0;


    for (k; k < data.length; k += 27) {
        for (let i = k; i < k + 27; i += 9) {

            data[i].square = j;
            data[i + 1].square = j;
            data[i + 2].square = j;
            data[i + 3].square = j + 1;
            data[i + 4].square = j + 1;
            data[i + 5].square = j + 1;
            data[i + 6].square = j + 2;
            data[i + 7].square = j + 2;
            data[i + 8].square = j + 2;
        }
        j += 3;
    }
}

function mapData(data) {
    let result = [];;


    for (let i = 0; i < data.length; i++) {
        result[i] = new MainEntry(i, data[i]);
    }
    return result;
}
function convert(table) {
    let objectData = mapData(table);

    getRow(objectData);
    getColumn(objectData);
    getSquare(objectData);
    
    return objectData;
}
module.exports = convert;