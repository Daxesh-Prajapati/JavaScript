// console.log('Happy Journey')
// 1. Scope for var,let and const
// 2. Hoisting (variable) /temporal dead zone
// 3. Execution Context,call stack and Execution stack
// 4. Scope chain and lexical scoping.
// 5. "Use strict" mode in JS
// 6. "this" in JS and windows object
// 7. Premitive and non-premitive data types
// 8. Pass by value and pass by refrence
// 9. Functional programming
//10. Function hoisting
//11. Callback functions and asynchronous function
//12. Higher order function
//13. IIFE
//14. Closure
//15. Call,Bind and Apply
//16. ForEach, for-in and for-of loops
//17. Array and Object destructuring
//18. Arrow functions
//19. Rest and Spread operator
//20. Class,object,contructor and inheritance
//21. Syncronimus and Ayncronimus programming
//22. Event Loop-> callback queue,mircro and macro task queue
//23. Callback Hell
//24. Promises
//25. Async/Await
//26. Prototype
//27. Polyfill
//28. Curring and closure
//29. Local and Session storage
//29. Local and Session Storage
//30. Cookies
//31. Debouncing and Throtlling
//32. Shallow and Deep copy
//33. Event Bubbling
//34. Event deglation
//35. Null and Undefined
//36. setTimeout and setInterval
//37. Macrotasks and Microtasks
//38. Memory leak and garbage collection
//39. Mark and Sweap algo
//40. The critical rendering
//41. Memorization
//42. Flat a array
//43. map().reduce(),forEach()
//44. fabnaoccie Series
//45. Array with 0, 1, and 2 (sort it in the most optimized manner)
//46. Linked List - Palindrome or not
//47. How Binary Search is implemented:
// 48. Server side rendering



// 1. let and const is block scoped where as var is function scoped
let cname = 'India'
if (true) {
    let cname = 'Newzeland'
    console.log(cname); //Newzeland
}
console.log(cname);   //India

var Cname = 'India'
if (true) {
    var Cname = 'Newzeland'
    console.log(Cname); //Newzeland
}
console.log(Cname);   //Newzeland


function varLetDiff() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(`${i} diff of var and let`);
        }, i * 1000)
    }
}
varLetDiff()
// Here in case of var 3 is printed three times and if we use let 0,1,2 will be printed
//--------------------------------------------------------------------------------------------------------------------------------------------//

//  2. JS default behaviour taking declaration to the top of the code before excecution
//  JS only hoist declarations,not initilization. Variable will be undefined until the line where its initialized is reaching in case of var but in case of let and const it will show error.
console.log(day) //undefined
// console.log(date); //RefrenceError
greet()
function greet() {
    console.log('new Day'); //new day
}
var day = 'sunday'
let date = 4 - 5 - 67
console.log(day) //sunday
// The Temporal Dead Zone (TDZ) is a specific rule related to hoisting that applies to variables declared with let and const keywords. In the TDZ, these variables exist but cannot be accessed or assigned a value until they are formally declared in the code. If you try to access them before their declaration, you will get an error.

// The TDZ was introduced to make code more predictable and prevent bugs caused by using variables before they are meant to be used. It encourages developers to declare variables at the beginning of their scopes to avoid confusion and potential issues.let date = 23
console.log(day) // sunday

//--------------------------------------------------------------------------------------------------------------------------------------------//

//3. Execution Context provides a environment to run a JS code. By deault there is global execution context later it executed through single thread.
// Call stack keep the record of all context including global and functional
function a1(a, b) {
    return a * b
}

function a2(m, n) {
    return a1(m, n)
}

function a3(y, z) {
    return a2(y, z)
}
let invoke = a3(4, 5)
console.log(invoke); //20
//Execution stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//  4. JS engine finds excat scope or assceability of a varibale which is called Chain scope
let global = 20
function main() {
    let local = 30
    function inner1() {
        console.log(local);
    }
    function inner2() {
        console.log(global);
    }
    inner1()
    inner2()
}
main()
//A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; 
function grandfather() {
    var name = 'Ishu'
    //like is not assceiable here
    function father() {
        //name is assceiable here
        //like is not assceiable here
    }
    function son() {
        var like = 45
        //like and name are  assceiable here
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 5. It helps in writing cleaner code and throw error when we use undeclared variable
y = 3.5 //this will not throw a error it will work in its local scope only
strict()
function strict() {
    // 'use strict'
    // x = 4.5  //throw error
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 6."this" keyword used in object method refers to object
// used alone refers to windows object
// used with strict mode refers to windows Object

let obj = {
    name: 'ishu',
    last: 'Sharma',
    fullname: function full() {
        return (this.name + this.last);
    }
}
console.log(obj.fullname()) //ishuSharma
let x = this //windows object
console.log(x);
function thisfunc() {
    return this //windows object
}
thisfunc()
//--------------------------------------------------------------------------------------------------------------------------------------------//

// 7. Premetive data types are 7 inbuilt data types suvh as string,boolean,number,symbol etc --> size depend on data,cannot perform functions
//Non-premitive a data types which are derived from premitive data types which are array and Object --> all have same size,can perform functions

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 8. Pass by value is directly passing the value as argument will not change the value if there is any change in function
function value(a, b) {
    let temp = a
    a = b
    b = temp
    console.log(a + 'value' + b);
}
var a = 2
var b = 3
console.log(a + 'before invoking' + b);
value(a, b)
console.log(a + 'after invoking' + b);

// Pass by referce is changing  the value by refece i.e by array and object will change the value if there is any change in function
function refrece(obj) {
    let temp = obj.a
    obj.a = obj.b
    obj.b = temp
    console.log(obj.a + 'value' + obj.b);
}
var obj11 = {
    a: 4,
    b: 6
}
console.log(obj11.a + 'before invoking' + obj11.b);
refrece(obj11)
console.log(obj11.a + 'after invoking' + obj11.b);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 9. Keep your data and functional totally seprate
// instead of changing the same varible make more
let score = 88
function addBonous() {
    score = score + 34
    return score
}
function addBonous1(score) {
    return score + 34
}
// treat function as first class citizen
const first = function (x, y) {
    return x + y
}
// function can be taken as a argument as well as can be return 
// sayhello(function () {
//     return 'new'
// })
// return function () {
//     return 'newVab'
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 10. Default behaviour of JS moving function declaration on the top of the code before excution
hello1()
function hello1() {
    return 'hello'
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 11. When a function is passed as argument in a function it is a called as callback functiom
function callbck(index, callme) {
    console.log(index)
    callme()
}
function callback() {
    console.log('new Happy World')
}
(callbck(23, callback))

// By default Js is a synchronous but by using async/await we can make it asynchronous so that the multiple taks can be run simentaneosuly.

const getdata = async () => {
    let data = 'Hello world'
    return data
}
getdata().then((data) => {
    console.log(data)
})

console.log(11);
// getdata()
console.log(2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 12. In HOF we can return function or use function a argument also
//So wirting one repeated code again we can use functions as arguments
function equate(arr, callback3) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        callback3(arr[i]) ? newArray.push(arr[i]) : null
    }
    return newArray
}
function isEven(i) {
    return i % 2 == 0
}
function isOdd(i) {
    return i % 2 !== 0
}
console.log((equate([2, 3, 5, 6, 876, 4, 8], isEven)));

//My custom filter and Map function
Array.prototype.myfilter = function (fn) {
    let filtered = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            filtered.push(this[i])
        }
    }
    return filtered
}

Array.prototype.mymap = function (fn) {
    let mapped = []
    for (let i = 0; i < this.length; i++) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 13. IIFE are function which a excecuted as they are mount to stack,if we want a function to only used once so we can immediately invoke as application loads

function Greet() {
    console.log("Welcome to GFG!");
};
Greet();

// IIFE creation and execution.
(function () {
    console.log("Welcome to GFG!");
})();

//--------------------------------------------------------------------------------------------------------------------------------------------//


//14. A closure gives you access to an outer function's scope from an inner function.
function add(a) {
    console.log('no. of eyes' + ' ' + a);
    let c = 5
    return function (b) {
        return a + b + c
    }
}
add(2)  //no. of eyes 2
let store = add(2)
console.log(store(3)); //2+5+3=10 values retained

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 15. Attach a function with object we use callback,bind and apply
// To achieve the reusability let us take a eg for Call
let student = {
    name: 'Ishu',
    sirname: 'Sharma',
    age: 26
}

// function getEmail() {
//     return (`${this.name}${this.sirname}${this.age}@gmail.com`) // common function to avoide repeating the code
// }
// function chooseSubject(sub1,sub2){
//     return sub1+ ' '+sub2
// }

let teacher = {
    name: 'Lalit',
    sirname: 'Kumar',
    age: 26
}
console.log(getEmail.call(student));
console.log(chooseSubject.call(student));
// Call and apply almost work similarly but apply take params in the from of array only where as call can take params in any form
console.log(chooseSubject.call(teacher, 'maths', 'english'));
console.log(chooseSubject.apply(teacher, ['maths', 'english']));
// In case of bind the function is bind with the object but not get envoked so if we want to we can call it later.


// Note=> This functions are attached with objects temporaily so if we want to attach them with objects in key value pairs with make a small diff. in functions
function getEmail() {
    return this.email = (`${this.name}${this.sirname}${this.age}@gmail.com`)   // common function to avoide repeating the code
}
function chooseSubject(sub1, sub2) {
    return this.subjects = sub1 + ' ' + sub2
}
console.log(student);
console.log(teacher);


//-------------------------------------------------------------------------------------------------------------------------------------------//


//16. forEach() method is used to loop through the elements of an array and didnt give a new array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num * 2);
});


const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map((num) => {
    return num * 2;
});
console.log(doubledNumbers);



//For-of and For-in loop
// for-of is used to itrate over arrays and strings
// for-in use to itrate over objects

for (let meal of fruits) {
    console.log(meal);
}

for (let key in student) {
    console.log(`${key}=> ${student[key]}`);
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

//17. Array destructuring
let arr51 = [name, age, job, email] = ['ishu', 25, 'frontend developer', 'ishwer@gmail.com']
console.log(arr51);

// Object destructuring
let student11 = {
    name11: 'Ishu',
    sirname11: 'Sharma',
    age11: 26,
    address11: {
        city: 'rewari',
        state: 'HR'
    }
}
let { name11, sirname11, age11, address11: { city, state } } = student11

function studentDeayils({ name11, age11 }) {
    console.log(`name: ${name11},age: ${age11}`);
}
studentDeayils(student11)
console.log(name11);
console.log(age11);
console.log(city, state);

//--------------------------------------------------------------------------------------------------------------------------------------------//

//18.Array functions
// Push=> Add element to the last index of a array
// Pop=> Removing element from the last index
// Shift=> Remove element from the first index
// UnShift=> Add element from the first index

fruits = ['apple', 'grapes', 'banana', 'lichi', 'watermelon']
fruits.push('strabarry')
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift('strabarry')
console.log(fruits);

//An arrow function expression is a compact alternative to a traditional function expression
(a, b) => a + b + 100;

// const a = 4;
// const b = 2;


//--------------------------------------------------------------------------------------------------------------------------------------------//

//19. Rest and Spread operators
// Rest operator=>List of item converted to array
function sun(a, b, ...restEx) {
    console.log(restEx); //[3,4,5]
    return a + b
}
sun(1, 2, 3, 4, 5)

//Spread opertator=> converts araay into list of items
Math.max(3, 4, 5, 8, 5, 3, 9)   //9
let maxVal = [3, 4, 5, 8, 5, 3, 9]
Math.max(maxVal) //NaN (as this not accept array as prop)
Math.max(...maxVal) //9 

//--------------------------------------------------------------------------------------------------------------------------------------------//

//20. Class,object,contructor and inheritance
class Car {
    constructor(wheel, color) {
        this.wheel = wheel,
            this.color = color
    }
    backCamera() {
        console.log('Available');
    }
}

class EvCar extends Car {
    constructor(wheel, color, fuel) {
        super(wheel, color)
        this.fuel = fuel
    }
}

let TATA = new EvCar(4, 'Black', 'electric')
console.log(TATA);

//-------------------------------------------------------------------------------------------------------------------------------------------//

//21. Syncronimus and Asyncronimus programming
console.log(1);
setTimeout(() => {
    console.log("I love JavaScript !!!");
}, 3000);
const getdata11 = async () => {
    let data = [1, 2, 3, 4, 5, 6, 6, 7, 8]
    return data
}
console.log(2);

getdata11().then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 4000)
})
//1
//2
//I love JavaScript !!!
//[1, 2, 3, 4, 5, 6, 6, 7, 8]

//--------------------------------------------------------------------------------------------------------------------------------------------//

//22. Event Loop-> callback queue,mircro and macro task queue

// The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.
//  The general algorithm of the engine:
//  1.While there are tasks:
//       =>execute them, starting with the oldest task.
//  2.Sleep until a task appears, then go to 1.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//23. Callback hell is when you nest things inside of each other because they all depend on the previous callback to being called before it can then go ahead and run, when you need to run things in sequence, one after the other.

function divide(x, y) {
    return x / y
}
function multiply(x, y) {
    return x * y
}
function compute(callBack, x, y) {
    return callBack(x, y)
}
console.log(compute(divide, 10, 5))    // 2
console.log(compute(multiply, 10, 5)) //20

//--------------------------------------------------------------------------------------------------------------------------------------------//

//24. Promises in JavaScript allow you to handle asynchronous operations, such as API requests. They represent the eventual completion or failure of an operation and provide a structured way to handle the result. By associating handlers with success and failure, Promises simplify asynchronous code.
// Function to fetch data from a real API using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1') // Using JSONPlaceholder API as an example
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: Unable to fetch data');
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// function fetchdata1(){
// return new Promise((res,rej)=>{
//     setInterval(()=>{
//         console.log('dd');
//     },1000)
//     .then(data=>{
//         res(data)
//     }).catch(error=>{
//         rej(error)
//     })
// })
// }

fetchData.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// Consuming the Promise
// fetchData()
//     .then(data => {
//         console.log('Data fetched:', data);
//     })
//     .catch(error => {
//         console.log('Error:', error);
//     })

//Short form
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//--------------------------------------------------------------------------------------------------------------------------------------------//

//25. The async function declaration declares an async function where the await keyword is permitted within the function body. 
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
function callAfterAsync() {
    return new Promise(resolved => {
        setTimeout(() => {
            resolved('Resolved Promise in async await')
        }, 2000)
    })
}

async function asyncCall() {
    console.log('Calling async await');
    var result = await callAfterAsync()
    console.log(result);
}

asyncCall()

//--------------------------------------------------------------------------------------------------------------------------------------------//

//26. Prototypes are the mechanism by which JavaScript objects inherit features from one another.
class Student11 {
    constructor(name, _class, age, section) {
        this.name = name
        this.class = _class
        this.age = age
    }
}

Student11.prototype.section = 'section'

class Student12 extends Student11 {
    constructor(name, _class, age, bloodDonation) {
        super(name, _class, age,)
        this.bloodDonation = bloodDonation
    }
}
var student1 = new Student11('ishu', 1, 25)
var student2 = new Student12('ishu', 1, 25, 3)

console.log(student2.section);

//--------------------------------------------------------------------------------------------------------------------------------------------//

//27. Pollyfill is wiriting a code for a browser which doesnt supports a specific code which follows by our current browser
let arr27 = [1, 2, 3, 4, 5]
Array.prototype.forEach = null

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback) {
        for (let val of this)
            callback(val)

    }
}
arr27.forEach((val) => {
    console.log(val * 2);
})

//--------------------------------------------------------------------------------------------------------------------------------------------//

//28. Curring and Closure
// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument
function multiply(a) {
    return function (b) {
        return a * b;
    };
}
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4)); // Output: 8

// Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows you to partially apply arguments to a function and create new functions with some arguments pre-filled
function outer() {
    const outerVariable = 'Hello';
    function inner() {
        console.log(outerVariable);
    }
    return inner;
}
const closureFunc = outer();
closureFunc(); // Output: Hello



//--------------------------------------------------------------------------------------------------------------------------------------------//

//29. Local and Session Storage

// LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date. This means that the data will always be persisted and will not expire. So, data stored in the browser will be available even after closing the browser window

// SessionStorage exists only within the current browser tab.Another tab with the same page will have a different storage.The data survives page refresh, but not closing/opening the tab.


// the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

window.localStorage.setItem('name', 'Ishwer')
let nameLocal = window.localStorage.getItem('name')
// alert(nameLocal)

//  setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//30. Cookies
// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name
// Cookies are saved in name value pairs

document.cookie = "username=Ishwer Sharma"

//--------------------------------------------------------------------------------------------------------------------------------------------//

//31. Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.
// Debouncing is a technique in JavaScript used to optimize performance by delaying the execution of a function until after a certain period of inactivity. It ensures that the function is called only once during a series of rapid consecutive calls.
function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// Simulating an API call
// function fetchData(query) {
//     fetch(`https://api.example.com/search?q=${query}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Handle the API response here
//         })
//         .catch(error => {
//             console.log(error); // Handle any errors here
//         });
// }

// Debounced function that calls the API after 500ms of inactivity
const debouncedFetchData = debounce(fetchData, 500);

// Example usage
debouncedFetchData('example');
debouncedFetchData('example2');
debouncedFetchData('example3');
// Only the last API call will be executed after 500ms of inactivity

// Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)
const nCount = document.querySelector('.n_count')
const tCount = document.querySelector('.p_count')
let count = 0
let count_T = 0
let throttle = true
const normallC = () => {
    count++
    nCount.innerHTML = `Noraml Count: ${count}`
}

const throttleCount = () => {
    if (throttle === true) {
        count_T++
        tCount.innerHTML = `throttle Count: ${count_T}`
        throttle = false
        setTimeout(() => {
            throttle = true
        }, 2000)
    }

}
const scrollCount = () => {
    normallC()
    throttleCount()
}

//--------------------------------------------------------------------------------------------------------------------------------------------//

// /32. Shallow and Deep copy
//This is  called Shallow copy
// Example of a shallow copy
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];
shallowCopy[2][0] = 99; // Modifying the nested array in the shallow copy
console.log(originalArray); // [1, 2, [99, 4]]
console.log(shallowCopy);  // [1, 2, [99, 4]]
// In the example above, the modification in the nested array affected both the original and shallow copy because they still share the same reference to the inner array.


// Deep Copy:
// Example of a deep copy using a custom function
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Base case: return primitive values or null as is
    }
  
    if (Array.isArray(obj)) {
      const copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopy(obj[i]); // Recursively copy array elements
      }
      return copy;
    }
  
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]); // Recursively copy object properties
      }
    }
    return copy;
  }
  
  const originalObject = { a: 1, b: { c: 2 } };
  const deepCopyObject = deepCopy(originalObject);
  
  deepCopyObject.b.c = 99; // Modifying the nested property in the deep copy
  
  console.log(originalObject);      // { a: 1, b: { c: 2 } }
  console.log(deepCopyObject);       // { a: 1, b: { c: 99 } }
  
// In the deep copy example, changes made to the nested property of the copied object do not affect the original object, demonstrating the independence of the deep copy.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//33. Event Propgation(Bubbling and Capturing)
// Event Bubbling=> The event is first captured and handled by the innermost element and then propagated to outer elements.
// document.getElementById('parent').addEventListener('click', function() {
//     console.log('Parent element clicked');
//   });

//   document.getElementById('child').addEventListener('click', function() {
//     console.log('Child element clicked');
//   });

//   document.getElementById('button').addEventListener('click', function(event) {
//     event.stopPropagation();
//     console.log('Button clicked');
//   });

// Event capturing=> the event is first captured by the outermost element and propagated to the inner elements.
// document.getElementById('parent').addEventListener('click', function() {
//     console.log('Parent element clicked (capturing)');
//   }, true);

//   document.getElementById('child').addEventListener('click', function() {
//     console.log('Child element clicked (capturing)');
//   }, true);

//   document.getElementById('button').addEventListener('click', function() {
//     console.log('Button clicked (capturing)');
//   }, true);

// Both can be prevent by (method) Event.stopPropagation()



//34. Event delegation=> It is pattern that efficiently handles events. Events can be added to a parent element instead of adding to every single element. It refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated.
// Parent element
// const parentElement = document.getElementById('parent');

// Event handler function
// function handleClick(event) {
//   const target = event.target;

//   if (target.classList.contains('child')) {
//     console.log('Clicked on a child element:', target.textContent);
//   }
// }

// Delegate the click event to the parent element
// parentElement.addEventListener('click', handleClick);

// If a div have 9 small div with different options intead of putting eveent listner on every div individually we can capture by using parent div event capturing properties

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 35.Null means value assigned to the var is zero or blank
let x1 = null

// When a var is undefined that means var is defined but value is not given to it 
let x2;

//--------------------------------------------------------------------------------------------------------------------------------------------//

//36. setInterval=>The setInterval() Javascript method is used to call a function repeatedly at a specified interval of time. setInterval() is cancelled by clearInterval() method.

// setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    console.log("Setinterval example" + d);
}
clearInterval()

// setTimeout=> The setTimeout() method is used to call a function after a certain period of time. setTimeout() is cancelled by clearTimeout() method. 

function sayHi(phrase, who) {
    console.log('This is settimeout example ' + phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Hello", "John");

//--------------------------------------------------------------------------------------------------------------------------------------------//

//37. MicroTask=> In JavaScript, microtasks are often associated with asynchronous tasks and the event loop. One micro task can schedule another micro task
// Event loop continuously runs all the micro task. You need to be cautious with how you go about recursively adding micro tasks. Some examples of micro tasks are:
// Promises: Microtasks are used extensively with promises. When a promise is resolved or rejected, the corresponding callback function is executed as a microtask.
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(() => {
//         // Code to handle the data
//     })
//     .catch(() => {
//         // Code to handle errors
//     });

// process.nextTick() => In Node.js, process.nextTick() is a method that defers the execution of a callback function until the next iteration of the event loop.
// It has a higher priority than setTimeout() and setImmediate(), and the callback is executed before any I/O operations or timers.
// It's commonly used for scheduling callbacks that need to be executed immediately after the current operation completes.


// queueMicrotask() => queueMicrotask() is a browser API that allows you to schedule a microtask to be executed at the next available opportunity in the event loop.
// It's similar to process.nextTick() in Node.js but is typically used in browser environments.
// It has a lower priority than Promise.resolve() and MutationObserver.


// Macrotasks => In JavaScript are larger tasks that are scheduled to be executed in the event loop. Unlike microtasks, macrotasks are processed after the microtask queue is empty. Here are some examples of macrotasks in JavaScript:

// setTimeout() and setInterval(): These functions schedule tasks to be executed after a specified delay or at regular intervals, respectively.
// Event handlers: When an event occurs, such as a click or keypress, the associated event handler function is queued as a macrotask to be executed.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//38. Memory leak and garbage collection

// In programming, memory leaks occur when you allocate memory for objects or data, but you forget to release or free up that memory when it's no longer needed. As a result, memory usage grows over time, causing performance issues or crashes.

// To prevent memory leaks, garbage collection comes into play. It's like having someone periodically check the bucket and remove items that are no longer needed. The garbage collector in programming languages performs a similar task by automatically identifying and freeing up memory occupied by objects that are no longer accessible or referenced by the program.
let obj6 = { name: 'John', age: 25 };
obj6 = null;

//--------------------------------------------------------------------------------------------------------------------------------------------//

//39. Mark and Sweap algo
// the Mark and Sweep algorithm identifies and removes objects that are no longer accessible or needed, reclaiming memory space for future use.
// The Mark and Sweep algorithm helps prevent memory leaks by effectively identifying and removing unused objects, ensuring efficient memory usage in your programs.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//40. The critical rendering path refers to the sequence of steps that a web browser takes to convert HTML, CSS, and JavaScript into pixels on the user's screen. It involves fetching, parsing, and rendering resources to display the content of a web page. 
// Throughout this process, the browser works behind the scenes to fetch resources, parse HTML and CSS, calculate styles, and render the content. The critical rendering path ensures that the web page is displayed to the user as quickly and efficiently as possible, providing a smooth and responsive browsing experience.

//--------------------------------------------------------------------------------------------------------------------------------------------//

//41. Memorization
console.time('memo')
function memoizedFactorial() {
    let memo = [];
    return function (n) {
        let result = factorial(n);
        memo[n] = result;
        return result;
    };
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorialResult = memoizedFactorial();

// Call the memoized function
console.log(memoizedFactorialResult(5)); // Calculates and returns the result (120)
console.timeEnd('memo')

console.time('memo')

console.log(memoizedFactorialResult(5));
console.timeEnd('memo')

// Returns the memoized result (120) without recalculating

//--------------------------------------------------------------------------------------------------------------------------------------------//

//42. Flat a array

const nestedArray = [1, 2, [3, 4, [5, 6]]]
const nestedArray2 = ['sd', ['cdfe', 'dfs']]
let flatArr = nestedArray.flat(Infinity)
console.log(flatArr);

function flattenArray(arr) {
    const flattened = [];
    const stack = [...arr];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            flattened.unshift(next);
        }
    }
    return flattened;
}

function flattenArray1(arr) {
    let flattened = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArray1(element));
        } else {
            flattened.push(element);
        }
    });

    return flattened;
}

//only for array of strings
const flatArray2 = nestedArray2.reduce((acc, curr) => {
    return acc.concat(curr)
})
console.log([flatArray2]);
// Example usage
//   const nestedArray = [1,2,[3,4,[5,6]]]
//   const flattenedArray = flattenArray(nestedArray);
//   console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

//--------------------------------------------------------------------------------------------------------------------------------------------//

//43. map(): It transforms each element of an array and creates a new array with the transformed values. It's like taking each item, changing it, and putting it into a new container.

const numbersMap = [1, 2, 3, 4, 5];
const multipliedByTwo = numbersMap.map(num => num * 2);
console.log(multipliedByTwo); // Output: [2, 4, 6, 8, 10]


// reduce(): It combines all elements of an array into a single value. It's like adding all the numbers in a list to get the total sum.

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15


// forEach(): It allows you to perform a specific action on each element of an array. It's like doing something with each item in a list, one by one, without creating a new list or modifying the original list.

const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach(num => console.log(num)); // Output: 1 2 3 4 5

//--------------------------------------------------------------------------------------------------------------------------------------------//

//44. fabnaoccie Series
// let num = 100
let x11 = 0
let y11 = 1
let num = 10
let fn = x11 + y11
while (fn < num) {
    console.log(fn);
    fn = x11 + y11
    x11 = y11
    y11 = fn
}


//--------------------------------------------------------------------------------------------------------------------------------------------//

//45. Array with 0, 1, and 2 (sort it in the most optimized manner):
// To sort an array with 0s, 1s, and 2s, we can use a modified version of the Dutch National Flag algorithm. The algorithm maintains three pointers: low, mid, and high. The low pointer keeps track of the boundary of 0s, the mid pointer scans the array, and the high pointer keeps track of the boundary of 2s.
const sortArray = (arr) => {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
};
const array = [1, 2, 0, 1, 0, 2, 1, 2, 0];
console.log(sortArray(array)); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]

//--------------------------------------------------------------------------------------------------------------------------------------------//

// 46. Linked List - Palindrome or not:

// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(2);
// linkedList.append(1);

// const isPalindromeLinkedList = (list) => {
//   let currentNode = list.head;
//   const values = [];

//   while (currentNode !== null) {
//     values.push(currentNode.value);
//     currentNode = currentNode.next;
//   }

//   const reversedValues = values.slice().reverse();

//   return values.join('') === reversedValues.join('');
// };

// console.log(isPalindromeLinkedList(linkedList)); // Output: true

//--------------------------------------------------------------------------------------------------------------------------------------------//

//47. How Binary Search is implemented:
// Binary Search is a divide-and-conquer search algorithm used to find the position of a target value within a sorted array. It compares the target value with the middle element of the array and eliminates half of the remaining elements in each iteration.
const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const array11 = [2, 4, 6, 8, 10, 12, 14];
const target11 = 10;
console.log(binarySearch(array11, target11)); // Output: 4


// 48. Server side rendering
// Server-side rendering (SSR) is a technique used in web development. It involves generating web pages on the server and sending them to the client as fully rendered HTML. This allows the content to be displayed immediately and improves the initial page load time.

// SSR is beneficial because it helps with search engine optimization (SEO) by allowing search engines to crawl and index the content effectively. It also enhances performance, especially on devices with slower processing capabilities.

// Frameworks like Next.js, Nuxt.js, and Angular Universal provide built-in support for server-side rendering and make it easier to implement in your applications.

// Overall, server-side rendering is a valuable approach for improving SEO, initial page load time, and performance in web development.