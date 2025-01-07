let numbers = [2, 4, 9, 10, 45, 67, 8, 90];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]); 
    } else {
        oddNumbers.push(numbers[i]); 
    }
}

console.log("Все числа:", numbers);
console.log("Четные числа:", evenNumbers);
console.log("Нечетные числа:", oddNumbers);
