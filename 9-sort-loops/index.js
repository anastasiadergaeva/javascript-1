const arr = [1, 40, -5, 19, 0];

function sortArray() {
    for (let j = 0; j < arr.length; j++){
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let newCount = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = newCount;
            }
        }
    }
    return arr;
}

console.log(sortArray());