const userName = prompt('What is your name?');

greeting(userName);

function greeting(value) {
    console.log('Hello, ' + value + '!');
}