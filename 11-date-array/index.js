function transformDateStringToArray(dateString) {
    const [month, day, year] = dateString.split('/');

    if (!year) {
        [day, month, year] = dateString.split('-');
    }

    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null
    }

    return [day, month, year];
}

function checkCorrectDate(dateArray) {
    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    function isLeapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    const [day, month, year] = dateArray.map(dateEl => Number(dateEl));

    // check month
    if (month > 12 || month < 1) {
        return false;
    }

    // check day
    if (day > 31 || day < 1) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }


    // check February for correct day and leap year
    if (month === 2) {
        if (day === 30 || (day === 29 && !isLeapYear(year)) ) {
            return false;
        }
    }

    return true;
}

function checkDateFormat(date) {
    if (typeof date !== 'string') {
        return false;
    }

    const dateNumbersArray = transformDateStringToArray(date);

    if (dateNumbersArray === null) {
        return false
    }

    if (dateNumbersArray.some(number => !number || !(Number(number) >= 0))) {
        return false
    }

    if (!checkCorrectDate(dateNumbersArray)) {
        return false
    }

    return true;
}

function getDates(arr) {
		const resultArr = [...arr]
    return resultArr
        .filter(checkDateFormat)
        .map(filteredDate => transformDateStringToArray(filteredDate).join('-'));
}

const arr = ['DD-MM-YYYY','MM/DD/YYYY','31-12-1990','12/31/1990','10-02-2022', '29-02-2022', '30-02-2022', '31-02-2022', 'test', 5, '11/12/2023', '00/13/2022', '41/12/2023', '41/-12/2023', 'aaaa/bbbb/vvvv', '//', [], '']

console.log(getDates(arr));