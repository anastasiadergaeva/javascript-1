const arr = [1, 40, -5, 19, 0];

// function sortArray() {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const newCount = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = newCount;
//             }
//         }
//     }
//     return arr;
// }

function sortArray() {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(sortArray());