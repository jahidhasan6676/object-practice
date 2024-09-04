// let place = 'dhaka'
// console.log(place.length);
// console.log(place[2]);

// const name = 'jahid ';

// const drink = ' jahid';

// if(name.trim() === drink.trim()){
//     console.log('ami bari jabo')
// }
// else{
//     console.log('ami jabo na')
// }

// let address = 'cumilla';
// let part = address.slice(1,5);
// console.log(part);

// const sentence = 'i am a good boy';
// console.log(sentence.split('a'))

// const friend = ['jahid', 'jasan', 'hassan', 'hasan'];

// console.log(friend.join('+'))

// const first = 'jahid';
// // const last = 'hasan';
// // const fullname = first.concat(' ').concat(last);
// // console.log(fullname);
// console.log(first.includes('h'));

const sentence = 'i am a good boy';

// let reverse = ''
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;


// console.log(reverse);
// let rev = ''
// for(let i = 0; i < sentence.length; i++){
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// // console.log(rev)

// const reversed = sentence.split

// object 
// const bottle = {
//     brand: 'samsung',
//     price: 45,
//     color: 'white',
//     isClean: false,

    
// }


// const subject = {
//     name: 'biology',
//     teacher: 'raseda mam',
//     chapter: ['first', 'second'],
//     exam: {
//         name: 'final exam';
//         marks: 100,
//     }
// }

// const person = {
//     name: 'jahid hasan',
//     age: 25,
//     profession: 'developer',
//     salary: 25000,
//     married: true,
//     'fav place': ['bandorbon', 'sajek', 'kuakata']
// }
// person.name = 'kamrul hasan';
// console.log(person.name)


// const propName = 'salary';
// person[propName] = '32000'
// console.log(person)
// const keyName = 'name'
// console.log(person[keyName])

// const propName = 'profession';
// person[propName] = 'job'
// console.log(person[propName])








// const propName = 'profession';
// person[propName] = 'devops'
// console.log(person)
// person.salary = 30000;
// person['age'] = 30;
// person['fav place'] = ['saintmartin', 'cox-bazar', 'lalmai']
// const keyname = 'profession';
// console.log(person[keyname])

// console.log(person)
// console.log(person)
// console.log(person.name)
// const boyos = person.age;
// console.log(boyos)
// const income = person['salary']
// console.log(income)


// const computer = {
//     brand: 'lenevo',
//     price: 35000,
//     processor: 'intel',
//     ssd: '512gb',
// }
// const values = Object.values(computer);
// console.log(values)

// const keys = Object.keys(computer);
// console.log(keys)


// const college = {
//     name: 'vnc',
//     class: ['11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'red',
//         result: {
//             grp: 5,
//             merit: 'top',
//         }

//     }
// }
// college.events[1] = '16 December'
// console.log(college.events[1])
// college['unique'].result.merit = 'top top top most';
// console.log(college.unique.result.merit)
// delete college.class;
// delete college.name;
// console.log(college)

//    

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
}
const keys = Object.keys(mobile);
// console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key])
}





// const keys = Object.keys(mobile);
// console.log(keys);

// for(const key of keys){
//     console.log(key, ':', mobile[key])
// }

// for(const total in mobile){
//     console.log(total)
//     console.log(mobile[total])
// }