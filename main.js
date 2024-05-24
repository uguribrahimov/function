// function person(name,age,height,salary,position ) {
//     this.name = name
//     this.age = age 
//     this.height = height
//     this.salary = salary 
//     this.position = position

// }
// const person1 = new person("Faiq 23 170 1000 mentor")
// const person2 = new person("Ferman 23 185 2000 muellim")
// const person3 = new person("Ugur 23 184 1000000 telebe")


// console.log(person1);
// console.log(person2);
// console.log(person3);                                 person







// const number = (reqem) => { reqem % 2 === 0 ? console.log(reqem + " cutdur") : alert("cut deyil");
    
// }
// number(6)                                                 Cut/Tek




// function fibonacci(a, b, max) {
//     console.log(a); 

//     const next = a - b 
//     if (next > max) {
//         fibonacci(b, next, max); 
//     }
// }                                                     tersFibonacci





// fibonacci(1597, 987, 0);


// const fibonacci = (a, b, max) => (
//     console.log(a),
//     (a - b > max) && fibonacci(b, a - b, max) 
// );


// fibonacci(1597, 987, 0);                         tersFibonacci arrow ile








const vurma = (number) => {
    return number * 10;
};


const check = (result) => result % 2 === 0 ? alert("cutdur.") : alert("tekdir.")

const daxilOlunan = 5; 
const result = vurma(daxilOlunan);
check(result); 








