const randomNum = function (from, to) {
    const index = (Math.random() * (to - from) + from).toFixed();
    return index;
}

const myArray = function (count, from = -100, to = 100) {
    let ourArray = [];
    for (let i = 0; i < count; i++) {
        ourArray[i] = randomNum(from, to) / 1;
    }
    return ourArray;
}

console.log(myArray(100));

const minusNum = myArray(100)
    .filter(item => item < 0);

console.log('Minus Numbers - ',minusNum.length);

const plusNum = myArray(100)
    .filter(item => item > 0);

console.log('Plus Numbers - ',plusNum.length)

const minElem = Math.min(...myArray(100));
console.log('Min Element - ',minElem);

const maxElem = Math.max(...myArray(100));
console.log('Max Element - ', maxElem)