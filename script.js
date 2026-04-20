
// settimeout - settimeout ka code kuch der baad chalta hai
// console.log("hey 1");
// console.log("hey 2");
// console.log("hey 3");
// setTimeout(()=>{  // or we can write setTimeout(function(){ console.log("hey 4")},2000)
//     console.log("hey 4");
// },2000)
// console.log("hey 5");


 // setinterval - set interval ka code kuchh der baad chalta hai and baar baar ek particular interval time mein

// setInterval(function(){
//     console.log('hey 1');
// },2000)
// now if you want to stop  the the setInterval use clearInterval();
// var count = 0;
// const humaraInterval = setInterval(function(){
//     count++;
//     console.log(count);
//     if(count===3) clearInterval(humaraInterval);
// },2000);


// Fetch API - ye kisi aur url par jaa kar kuch data layegaa yaa data humaare pass se us url par lekar jaayega
// use random user generator for api
// fetch(`https://randomuser.me/api/`)
// .then(raw =>raw.json())
// .then(res => console.log(raw))


// axios (or other HTTP libraries) - ye bhi wahi karta hai jo fetch karta par ye thoda jyada developer friendly hota hai
// axios.get(`https://randomuser.me/api/`) 
// .then(result => console.log(result.data));

// difference b/w fetch and axios -> fetch pehle raw dat dega aur phir usse readable form(.json) me convert karna padtaa hai and in case of AXIOS ye direct result provide karta hai. and fetch me .then 2 times likna padhtaa ahi or axios me .then 1 times only



// PROMISE
// 🔹 Real-Life Example
// You order pizza from an app like Zomato.
// After ordering, three things can happen:

// Pending (waiting)
// → Your order is placed, but pizza hasn’t arrived yet.
// Resolved (success)
// → Pizza is delivered successfully 🍕
// Rejected (failure)
// → Delivery failed (maybe restaurant closed 😢)
// 🔹 Same thing in JavaScript

// A Promise represents a task that will finish in the future.
 
// const parchi = new Promise(function(resolve, reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// parchi.then(function(){
//     console.log("hara butoon daba");
// })
// .catch(function(){
//     console.log("red button daba");
// })

// let promise = new Promise((resolve, reject) => {
//     // let pizzaArrived = true;
//     let pizzaArrived = false;
//     if (pizzaArrived) {
//         resolve("Pizza delivered 🍕");
//     } else {
//         reject("Delivery failed ❌");
//     }
// });
// // How to use it promise
//  promise.then((result) => {
//       console.log(result); // if success
//   })
//   .catch((error) => {
//       console.log(error); // if failed
//   });


// A Promise is an object in JavaScript that represents the result of an asynchronous operation.
// It has three states:
// Pending
// Fulfilled (Resolved)
// Rejected
// 🔹 One-line memory trick

// 👉 Promise = "I will give result later (success or failure)"

 
// CALLBACK -> ye ek function hai jisse pass kiya gaya ho kisi aur function mein aur jab wo function chale to app uss pass kiye gaye callback function ko chala paayege.
// function abcd(a,b){
//     b();
// }
// abcd(1,function() {console.log("callback chala")});

// 🔹 Real-Life Example (Callback)
// Suppose you order food from Zomato.
// You tell the delivery app:
// 👉 “When my order arrives, call me.”
// That “call me” instruction is a callback.

// So:

// You don’t wait continuously
// You just give a function to run later
// 🔹 Callback in JavaScript

// A callback is simply a function passed as an argument to another function, which is executed later.

// function orderFood(callback) {
//     console.log("Ordering food...");

//     setTimeout(() => {
//         console.log("Food delivered 🍕");
//         callback(); // calling the callback
//     }, 2000);
// }

// function eatFood() {
//     console.log("Eating food 😋");
// }
// orderFood(eatFood);
// 🔹 Output
// Ordering food...
// (Few seconds later)
// Food delivered 🍕
// Eating food 😋
// 🔹 Simple Explanation (Exam Ready)

// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.

// 🔹 Problem with Callbacks 😬

// When callbacks are used too much, code becomes messy:

// doTask1(() => {
//     doTask2(() => {
//         doTask3(() => {
//             doTask4(() => {
//                 // messy 😵
//             });
//         });
//     });
// });

// 👉 This is called Callback Hell

// 🔹 Callback vs Promise (Easy Difference)
// Callback → “Call me when done”
// Promise → “I will return result later (clean way)”

// ASYNC & AWAIT

// 🔹 Real-Life Example (async/await)
// Again, think of ordering food from Zomato 🍔
// Without async/await (Promise way)
// You say:
// 👉 “When food arrives, then I’ll eat.”
// With async/await
// You say:
// 👉 “I’ll wait for food, then eat.”
// Much simpler and natural, right? 👍
// 🔹 What is async/await?
// async → makes a function return a Promise
// await → pauses execution until the Promise is completed

// 🔹 Step 1: Normal (Synchronous)
// console.log("Start");
// console.log("Eat food");
// console.log("End");

// 👉 Output:

// Start
// Eat food
// End

// Everything happens line by line.

// 🔹 Step 2: Problem (Asynchronous)

// Now imagine food takes time (like ordering from Zomato):

// console.log("Start");

// setTimeout(() => {
//     console.log("Food delivered 🍕");
// }, 2000);

// console.log("Eat food");

// 👉 Output:

// Start
// Eat food
// Food delivered 🍕

// ❗ Problem: You are eating before food arrives 😅

// 🔹 Step 3: Fix using async/await

// We want:
// 👉 “Wait for food, then eat”

// function orderFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Food delivered 🍕");
//         }, 2000);
//     });
// }

// async function eatFood() {
//     console.log("Start");

//     let result = await orderFood(); // WAIT here ⏳

//     console.log(result);
//     console.log("Eat food 😋");
// }

// eatFood();
// 🔹 Now Output becomes correct
// Start
// (after 2 sec)
// Food delivered 🍕
// Eat food 😋
// 🔹 Key Idea (Very Important)

// 👉 await = “stop here until work is done”
// 👉 async = “this function can use await”



//DIFFERENCE B/W callbacks vs promises vs async/await
// ek url se dat lekar aao and ussey console ar show karo via callback

// function datafetcher(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }

// datafetcher("https://randomuser.me/api/", function(result){
//     console.log(result);
// })


// function datafetcher(url){
//     const parchi = new promisw(function(resolve, reject){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         resolve(result);
//         })
//     })
//     return parchi;
// }

// datafetcher("https://randomuser.me/api/")
//     .then(function(result){
//         console.log(result);
//     })


async function datafetcher(url){
    let data = await fetch(url);
    let result = await data.json();
    return result;
}

async function hh(){
    let data = await datafetcher("https://randomuser.me/api/");
    console.log(data);
}
hh();
