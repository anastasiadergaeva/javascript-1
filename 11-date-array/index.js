const incomingStrings = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '31-04-2000', '30-02-2002'];

function filterDates(arrayOfDates) {
    const filteredArr = arrayOfDates.flatMap((stringValue) => {
    const date = new Date(stringValue);
    if (!isNaN(date.getTime())) {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return [`${day}-${month}-${year}`];
    }
    return [];
    });
    return filteredArr;
}

console.log(filterDates(incomingStrings));