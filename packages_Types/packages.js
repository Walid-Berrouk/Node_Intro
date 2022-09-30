const ticket = {
    id: 19,
    owner: "Walid Berrouk",
    title: "a Super Hero Movie",
    date: "19/02/2022",
    time: "19:00",
    pg13: true,
}

class Student {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log("Hello", this.name, this.age);
    }

}

function startingFunction() {
    console.log("Hello User !")
}

module.exports = {
    ticket,
    Student,
    startingFunction
};

// See index