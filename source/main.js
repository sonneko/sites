let message = 'HelloWorld';
console.log(typeof(message));

const test = function () {
    console.log('Message')
}

const list = [1,2,3,4,5,6,7,8,9]

console.log(list[3])

const object = {key1: '1', key2: '2'}

console.log(object.key1);

function sleepSetTimeout(ms, callback) {
    setTimeout(callback, ms);
}

let elem = document.getElementById("para");
let color;
let conent;

elem.innerHTML =  '<p>testtestetst</p>';

/*function changeColor(newColor) {
    for (let i = 0; i < 100; i++) {
        conent = '<p>' + String(i) + '</p>';
        elem.innerHTML = conent ;
    }
}
*/