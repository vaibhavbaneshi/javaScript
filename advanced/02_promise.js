//Promise syntax 1
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    // DB calls
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('Promise 1 consumed \n');
})

//Promise syntax 2

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 is complete');
        resolve()
    }, 1000)
}).then(function() {
    console.log('Async task 2 consumed \n');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log();
        resolve({username: 'vaibhavBaneshi', email: 'vaibhav@gmail.com'})
    }, 1000)
}) 

promiseThree.then(function(user) {
    console.log(user);
    console.log(`UserName: ${user.username} and Email: ${user.email} \n`);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if(!error)
            resolve({username: `baneshi`, email: `baneshi@gmail.com`})

        else    
            reject(`Error: Something went wrong`)
    }, 1000)
})


//.then() chaining
promiseFour
.then(function(user) {
    console.log(user);
    return user
})
.then(function(user) {
    console.log(`UserName: ${user.username} and Email: ${user.email} \n`);
})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    console.log(`The promise is either resolved or rejected.\n`);
})


//arync and wait another way of using consuming a promise
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error)
            resolve({username: `javaScript`, password: `123`})

        else    
            reject(`Error: JS went wrong`)
    }, 1000)
})

async function promiseFiveAwait() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 

promiseFiveAwait()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/vaibhavbaneshi')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data,`\n`);
})
.catch(function(error) {
    console.log(error);
}) 