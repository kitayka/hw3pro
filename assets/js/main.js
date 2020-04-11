"use strict";
let array1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, 
     -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let array2 = [46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 
     16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37];
let positiveArr = [];
let negativeArr = []; 
let positiveArrOdd = [];
let positiveArrEven = [];
let sumPositiveEl = 0;
let minEl = Math.min.apply(null, array1);
let maxEl = Math.max.apply(null, array1);
let indexMin = 0;
let indexMax = 0;
let sumEvenPositiveEl = 0;
let sumOddPositiveEl = 0;
let multiplyPositiveEl = 1;
let arrContain4 = [];

for (let i = 0; i < array1.length; i++) {
     if (array1[i] > 0) {
          positiveArr.push(array1[i]);
          sumPositiveEl = sumPositiveEl + array1[i];
     }
     else {
          negativeArr.push(array1[i]);
     }
}
for (let i =0; i < array1.length; i++) {
     if (array1[i] < array1[indexMin]) {
          indexMin = i;
     }
     else if (array1[i] > array1[indexMax]) {
          indexMax = i;
     }
}
console.log("Сумма положителных элементов в исходном массиве: " + sumPositiveEl);
console.log("Количество положительных элементов в исходном массиве: " + positiveArr.length);
console.log("Наименьший элемент исходного массива: " + minEl);
console.log("Порядковый номер наименьшего элемента массива: " + indexMin);
console.log("Наибольший элемент исходного массива: " + maxEl);
console.log("Порядковый номер наибольшего элемента массива: " + indexMax);
console.log("Количество отрицательных элементов в исходном массиве: " + negativeArr.length);

for (let j = 0; j < positiveArr.length; j++) {
     if (positiveArr[j] % 2 !== 0) {
          positiveArrOdd.push(positiveArr[j]);
          sumOddPositiveEl = sumOddPositiveEl + positiveArr[j];
     }
     else {
          positiveArrEven.push(positiveArr[j]);
          sumEvenPositiveEl = sumEvenPositiveEl + positiveArr[j];
     }
}
console.log("Количество нечетных положительных элементов в исходном массиве: " + positiveArrOdd.length);
console.log("Количество четных положительных элементов в исходном массиве: " + positiveArrEven.length);
console.log("Сумма четных положительных элементов: " + sumEvenPositiveEl);
console.log("Сумма нечетных положительных элементов: " + sumOddPositiveEl);

for (let i = 0; i < positiveArr.length; i++) {
     multiplyPositiveEl = multiplyPositiveEl * positiveArr[i];
}
console.log("Произведение всех положительных элементов исходного массива: " + multiplyPositiveEl);

for (let i = 0; i < array1.length; i++) {
     if (array1[i] === 4) {
          arrContain4.push(array1[i])
     }
}
console.log("Количество элементов исходного массива равных 4: " + arrContain4.length);

for (let i = 0; i < array1.length; i++) {
     if (array1[i] != maxEl) {
          array1[i] = 0;
     }
}
console.log("Найден наибольший элемент массива, а остальные равны нулю: " + array1);

let sourceArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, 
     -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let array3 = [];
for (let i = 0; i < sourceArray.length; i++) {
     array3.push(sourceArray[i] - array2[i]);
}
console.log(array3);