// DEFAULT PARAMETERS
// =========================

function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
};

function rollDie(numSides =6) {
    return Math.floor(Math.random() * numSides) + 1
};

function greet(person, msg = "Hello!!"){
    console.log( `${msg}, ${person}!`)
}

// =============================
// SPREAD IN FUNCTION CALLS
// +++++++++++++++++++++++++++

Math.max(12,5,46,2,4,8,7,9,6,3,1)
46
Math.min(12,5,46,2,4,8,7,9,6,3,1)
1
const nums = [12,5,46,2,4,8,7,9,6,3,1]

nums
(11)[12, 5, 46, 2, 4, 8, 7, 9, 6, 3, 1]
Math.max(...nums)
46
Math.min(...nums)
1
console.log("dkeo", "seij", "eiho", "keihnbe", "ekie")
dkeo seij eiho keihnbe ekie

console.log(nums)
(11)[12, 5, 46, 2, 4, 8, 7, 9, 6, 3, 1]

12 5 46 2 4 8 7 9 6 3 1

console.log("hello")
hello

console.log(..."hello")
h e l l o

// ===============================================
// SPREAD WITH ARRAY LITERALS
// ===============================================

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];
const allAnimals = [...cats, ...dogs, "Speedy"];
const allHomePets = [1, 2, 3, ...cats, ...dogs, "Speedy"];

// ================================================
// SPREAD WITH OBJECTS
// ================================================

const feline = {legs: 4, family: 'Felidae'};
const canline = { isFurry: true, family: 'Caninae'};

{...feline}
{legs: 4, family: 'Felidae'}

{...canline}
{isFurry: true, family: 'Caninae'}

{...feline, color: 'orange'}
{legs: 4, family: 'Felidae', color: 'orange'}

const catDog = {...feline, ...canline}
undefined

catDog
{legs: 4, family: 'Caninae', isFurry: true}

{...canline, ...feline}
{isFurry: true, family: 'Felidae', legs: 4}

{...canline, ...feline, family: 'Steele'}
{isFurry: true, family: 'Steele', legs: 4}

const dataFromForm = {
    email: 'blueman@yahoo.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false}