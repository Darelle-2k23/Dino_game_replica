//assignment
 //Instal a typing software and for everyday send a screenshot of your typing score
//Instal node.js
// create an ES6 class, give it properties and create objects with it.


// let xArrow = (x, y) => x * y
// console.log(xArrow(4, 5))

// let xfunc = function (x, y) {
//     return x * y
// }
// console.log(xfunc(4, 5))

// class student {
//     constructor(name, dob, age, sex) {
//         this.name = name
//         this.dob = dob
//         this.age = age
//         this.sex = sex
//         this.school = 'Data Girl Technologies'
//     }
// }

// let stuDarelle = new student('Darelle', '06th December 2007', '15', 'female')
// console.log(stuDarelle)

// let second = new student('Namondo', '21st December 2009', '13', 'female',)
// console.log(second)


// class submition {
//     constructor(name, Asmday, course, submit) {
//         this.name = name
//         this.day = Asmday
//         this.course = course
//         this.submit = submit
//     }
// }

// let darelle = new submition('Darelle Ndoncha', 'day 6', 'web dev', 'submited')
// console.log(darelle)

// let cassidy = new submition('Cassidy Ndoncha', 'day5', 'baking', 'submited')
// console.log(cassidy)

// let Xanax = new submition('Karan Paulo', 'Day 3', 'Game Dev', 'submited')
// console.log(Xanax)

// let { name, course, day, submit }= Xanax
// console.log( name, 'has ', submit, 'his', day, course,'assignment' )


// function sum(x=9,y=6){
//     console.log(x+y)

// }
//sum(undefined,6)

// export default function sum(x=9, y=6){
//     console.log(x+y)
// }


function sumMultiplier(first,...args) {
    let sum = 0
    for (let i =0;  i< args.length; i++) {
     sum += args [i]
        
    }
    console.log(sum)
}
sumMultiplier(1,2,3,4,5,6,7,8,9,10)



// let y=5
// console.log(y)
let arr=[3,5,7,9]
sumMultiplier(...arr)





