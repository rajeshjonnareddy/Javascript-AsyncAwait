const value = "Resolve";

// Creting our own promise
// Sample New Promise
function delayedTimer() {

    // let timer1 = setTimeout(function(){ alert("Timer1 Ends"); }, 3000);
    // let timer2 = setTimeout(function(){ alert("Timer2 Ends"); }, 10000);

    const somethingSuccessfulhappened = false;

    return new Promise(function (resolve, reject) {
        if (!somethingSuccessfulhappened) {
            resolve(setTimeout(function(){ alert("Timer1 Ends"); }, 3000));
        } else {
            reject(setTimeout(function () { alert("End Of Timer"); }, 10000));
        }

    });
}

// Sample New Promise2
function someFunction() {
    const variable1 = 25;
    const variable2 = 35;

    return new Promise(function (resolve, reject) {
        if (variable1 === 25) {
            resolve(console.log("Variable is eaual to: " + variable1));
        } else if (variable1 < 25) {
            reject(console.log("Variable 1 is Lesser than 25"));
        } else {
            resolve(console.log("Not Exact value: " + variable1));
        }
    });
}

// Error Handling using Async/Await
async function loadJsonUrl (url) {
    try {
        let response = await fetch(url);
        if (response.status != 200) {throw new Error(response.status)};
    }
    catch (err){
        console.log("Error: " + err);
    }
}

// Async Function 
async function testAsyncAwait () {

    // Await will execute promises in sequential order
    // first promise fails next awating promise won't execute
    const promiseReturned = await delayedTimer();
    const promiseReturned2 = await someFunction();
    const result = loadJsonUrl('no-such-user.json');
}

testAsyncAwait();