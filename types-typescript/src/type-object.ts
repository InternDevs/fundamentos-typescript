//Type Object
let user: object;
user = {};

user = {
    id: 1,
    username: 'Juansecode',
    firstName: 'Juan',
    isPro: true
};

console.log(user);

const myObject = {
    id: 1,
    username: 'Juansecode',
    firstName: 'Juan',
    isPro: true
};

const isInstance = myObject instanceof Object;
console.log('user.username', myObject.username)