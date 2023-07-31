const object = []

function randomDate(min , max) {
    return Math.floor(Math.random() * (max-min)) + min
} 
function randomText(chrNumber) {
    let text = "";
    let randomInt = 0;
    let randomChar = '';
    let baseCharInt = 97;
    while(text.length < chrNumber){
        randomInt = Math.floor(Math.random() * 32) + baseCharInt;
        randomChar = String.fromCharCode(randomInt);
        text += randomChar;
    }
    return text;
} 

const addNewObject = () => {
    const newObject = {
        id : Math.floor(Math.random() * 11) ,
        name: randomText(6),
        date : randomDate(1999, 2023)
    }
    object.push(newObject)
}
addNewObject();
console.log(object)
console.log(object[0])
