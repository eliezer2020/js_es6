j//let -> var
let name = "gerson";

//const can not change on future
const name2="elieser"

//template string backtics
let myString = `hello ${name2}`;
console.log(myString)

//arrow functions
const greeting = (name)=> `welcome ${name}`
const greetingAndPrint = name =>{
  console.log("welcome "+name)
}
greetingAndPrint("gerson")

//rest operator
let miarray= [1,2,3,4];
let rest= [...miarray];
console.log(rest)

//spread operator
let arry3= [0,...miarray,5,6]
console.log(arry3)

//reduce 
const arrayNum = [1,2,3,4,5]
const initValue=0
const total = arrayNum.reduce((total,item)=>{
  return total+item
},initValue)
console.log(`total es : ${total}`)

//filter
const filteredArray= arrayNum.filter((item)=>{
  return item%2===0;
})
console.log(filteredArray)

//find(item) 1st & findIndex
const arrayGreater= arrayNum.find(item=>{
  return item>2
})
console.log(arrayGreater)

//CLASSES
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  
  getInfo=()=>{
    console.log(`person name: ${this.name} and age ${this.age}`)
  }
 
}
var gerson = new Person("gerson",26);
gerson.getInfo()

//FUNCTION CONSTRUCTORS (hoisted)// var and func are getting initialized first on JSRE scope
var user= new User("gerson", "administrador")
user.getInfo()

function User (name, type){
  this.name=name
  this.type=type
  
  this.getInfo=function(){
    console.log(`user is : ${this.name} and type ${this.type}`)
  }
}

//INHERITANCE
class Teacher extends Person {
  constructor(name,age,subject){
    super(name,age);
    this.subject=subject
  }
  getInfo=()=>{
    console.log(`teacher name: ${this.name} and subject ${this.subject}`)
  }
 
}
var peters= new Teacher ("peters",36,"ecuaciones diferenciales");
peters.getInfo()

//CALLBACKS AND PROMISES
const postListPriomise = new Promise((res,rej)=>{
  $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
    console.log(data)
    res(data)
  }).fail(err=>{
    console.log('call fail for getPostList Request')
    rej(new Error('call fail for getPostList Request'))
  })
})


const fakePostPromise = new Promise ((reslv,rej)=>}{
   const url = "https://jsonplaceholder.typicode.com/posts/";                                  
   fetch(url)                                   })


