// Part1
// Q1
function add7(string){
    return Number(string)+7
}
console.log(add7("123"))

// Q2
function falsy(variable){
    if(!variable) return "Invalid"
}
console.log(falsy(false))
console.log(falsy(0))
console.log(falsy(""))
console.log(falsy(null))
console.log(falsy(undefined))
console.log(falsy(NaN))
console.log(falsy(0n))

// Q3
function oddNum(){
    for(let num=1; num<11;num++){
        if (num%2 == 0) continue;
        console.log(num)
    }
}
oddNum()

// Q4
function evenNum(arr){
    arr.filter(num=> num%2 ===0).forEach(num=>console.log(num))
}
let arr1 =[1,2,3,4,5,6,7,8,9,10];
evenNum(arr1);

// Q5
let concat = (arr1,arr2) => console.log([...arr1, ...arr2]);
let arr2 =['a','b','c','d','e'];
concat(arr1,arr2);

// Q6
let day = (num)=>{
    switch (num){
        case 1:
            console.log('sunday');
            break;
        case 2:
            console.log('monday');
            break;
        case 3:
            console.log('tuesday');
            break;
        case 4:
            console.log('wednesday');
            break;
        case 5:
            console.log('thursday');
            break;
        case 6:
            console.log('friday');
            break;
        case 7:
            console.log('saturday');
            break;
        default:
            console.log('not a day');
    }
}
day(3);

// Q7
let strLen = (arr) => arr.map(str=>str.length);
let arr3 =["a", "ab", "abc"];
console.log(strLen(arr3));

// Q8
function divisible(num){
    if(num%3==0 && num%5==0) console.log('Divisible by both')
}
divisible(15);
divisible(12);

// Q9
let square = (num) => num**2;
console.log(square(5));

// Q10
let stringifyObj = (obj) => `${obj.name} is ${obj.age} years old`;
let obj = {name: 'John', age: 25};
console.log(stringifyObj(obj))

// Q11
let sum = (num1, num2, num3) => num1+num2+num3;
console.log(sum(...arr1))

// Q12
let p = new Promise((resolve)=>{
    setTimeout(()=>resolve(console.log('Success')), 3000)
})

// Q13
function maximum(arr){
    max=-Infinity
    arr.forEach(num=>{if(num>max) max=num})
    return max;
}
console.log(maximum(arr1))

// Q14
let keys = (obj)=>{
    let arr=[];
    for(let el in obj) arr.push(el);
    return arr;
}
console.log(keys(obj))

// Q15
let trunc = (sentence) => sentence.split(" ");
let sentence = "The quick brown fox";
console.log(trunc(sentence))

