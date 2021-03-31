
//Challenge 1
// for(let x = 1; x<=10; x++){
//     process.stdout.write(`${x} `);
// }

//Challenge 2
// for(let i = 1; i <= 100; i+=2){
//     process.stdout.write(`${i} `);
// }

//Challenge 3
// for(let i = 1; i <= 10; i++){
//     process.stdout.write(`${i*7} `);
// }

//Challenge 4
// for(let i = 1; i <= 10; i++){
//     console.log('')
//     for(let j = 1; j <= 10; j++){
//         console.log(` ${i} * ${j} = ${i*j}`)
//     }
// }

//Challenge 5
// let j = [];
// for(let i = 0; i <= 10; i++){
//     j.push(i)
// }

// let sum = j.reduce((x,y) => x+y);
// console.log(sum)

// let j = 0;
// for(let i=0; i<=10; i++){
//     j += i;
// }
// console.log(j);

//Challenge 6
// var prod = 1;
// for(var i = 1; i <= 10; i++)
// {
//     prod *= i;
// }
// console.log(prod);

//Challenge 7
// let j = 0;
// for(let i = 11; i < 30; i+=2){
//     j += i;
// }
// console.log(j)

//Challenge 8
// const celToFah = celsius => {
//     console.log(`${celsius} degrees celsius is equal to ${(celsius*1.8)+32} degrees fahrenheit`);
// }
// celToFah(8);

//Challenge 9
// const fahToCel = fahrenheit  => {
//     console.log(`${fahrenheit} degrees fahrenheit is equal to ${Math.floor((fahrenheit-32)*(5/9))} degrees Celsius`);
// }
// fahToCel(58);

//Challenge 10
// let array = [1,3,5,2,7,12,3,5,1,2];
// console.log(array.reduce((x,y) => x+y));

//Challenge 11
// let array = [1,3,5,2,7,12,3,5,1,2];
// sum = array.reduce((x,y) => x+y);
// avg = sum / array.length;
// console.log(avg)

//Challenge 12
// let array = [1,-3,5,2,-7,-12,-3,5,-1,2]
// const posNum = arr => {
//     for(x in arr){
//         if(arr[x] > 0){
//             console.log(arr[x])
//         }
//     }
// }
 posNum(array); butts