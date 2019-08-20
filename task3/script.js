

const newArray = function (count,from = 0,to = 30) {
    let ourArray = [];
    for (let i = 0; i < count; i++){
        ourArray[i] = (Math.random() * (to - from) + from).toFixed() / 1;
    }
    return ourArray;
}

function sortArray (arr) {
    let myArray = [];
    for (let i of arr) {
        if (!myArray.includes(i)) {
            myArray.push(i);
        }
    }
    return myArray;
}

console.log(sortArray(newArray(10)))



