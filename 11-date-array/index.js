const incomingStrings = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
const filteredDates = [];

function filterDates (arrayOfDates) {
    const arrayWithoutText = arrayOfDates
    .map((stringValue) => stringValue.split(/[-/]/))
    .filter(stringValue => {
        return Number(stringValue[1]);
    });
    for (i = 0; i < arrayWithoutText.length; i++) {
        if (arrayWithoutText[i][0] > 0 && arrayWithoutText[i][0] < 31) {
            filteredDates.push(arrayWithoutText[i].join('-'));
        }
    }
    return filteredDates;
}

console.log(filterDates(incomingStrings));