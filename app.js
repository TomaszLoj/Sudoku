const _ = require("lodash");
const sudokuTable = require("./sudokutable");
const sudokuTable2 = require("./sudokutable2");
const renderOutput = require("./render");
const convert = require("./convert");



function findMatchingNumber(tab) {
    let reference = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let allFind = false;
    let findOne = true;


    while (allFind === false && findOne === true) {

        allFind = true;
        findOne = false;

        for (let i = 0; i < tab.length; i++) {

            if (tab[i].value === 0) {

                allFind = false;

                let row = _.filter(tab, { 'row': tab[i].row })
                let column = _.filter(tab, { 'column': tab[i].column })
                let square = _.filter(tab, { 'square': tab[i].square })
                let rowVal = row.map((p, i) => row[i].value);
                let columnVal = column.map((p, i) => column[i].value);
                let squareVal = square.map((p, i) => square[i].value);
                let difference = _.difference(reference, rowVal, columnVal, squareVal)


                if (difference.length === 1) {

                    findOne = true;

                    tab[i].value = difference[0];
                    console.log('znaleziono   ' + i + '  ' + difference[0])

                }

            }


        }

    }

}

renderOutput(sudokuTable);
let g2 = convert(sudokuTable);
findMatchingNumber(g2);
let h2 = g2.map((p, i) => g2[i].value);
renderOutput(h2);
console.log('-------------------------------')
console.log('-------------------------------')
console.log('-------------------------------')

renderOutput(sudokuTable2);
let g = convert(sudokuTable2);
findMatchingNumber(g);
let h = g.map((p, i) => g[i].value);
renderOutput(h);

