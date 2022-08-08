let first = 5;
let second = 7;
console.log(first, second);
//this is wrong apporoach
// first = second;
// second = first;

//apporoach: 1
// const temp = first;
// first = second;
// second = temp;


//apporoach: 2 --- destructuring
[first, second] = [second, first];

console.log(first, second);
//ai shomosha slove korte chaile shei khetre tempor dorkar porbe




















