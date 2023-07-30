const arr = [1, 40, -5, 19, 0];

function sortArray(arr) {
    const arrayOfCounts = [...arr];
    for (let i = 0; i < arrayOfCounts.length - 1; i++) {
        for (let j = i + 1; j < arrayOfCounts.length; j++) {
            if (arrayOfCounts[i] > arrayOfCounts[j]) {
                [arrayOfCounts[i], arrayOfCounts[j]] = [arrayOfCounts[j], arrayOfCounts[i]];
            }
        }
    }
    return arrayOfCounts;
}

console.log(`Массив после сортировки: ${sortArray(arr)}`);
console.log(`Исходный массив: ${arr}`);