const arrayOfCounts = [15, -90, 201, -2, 0, 23, -90, 5000];

function filterTheArray (counts, fn) {
    const sortedArray = [];
    for (let i = 0; i < counts.length; i++) {
        if (fn(counts[i])) {
            continue;
        }
        sortedArray.push(counts[i]);
    }
    return sortedArray;
}

const deleteTheItem = numberCheck => numberCheck < 0;

console.log(filterTheArray(arrayOfCounts, deleteTheItem));