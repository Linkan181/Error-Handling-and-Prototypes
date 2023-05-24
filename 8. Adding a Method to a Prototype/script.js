
//There are 2 ways to create a prototype Object in javascript
//1. Using consturctor function

function Student(name){
  this.name=name;
}

Student.prototype.printDetails=function(){
  console.log(`Hello, my name is ${this.name}`);
}

const student1=new Student("Mithun");

student1.printDetails();


//-----------------------------------------------
//2. Using Object.create() method
const obj={
  
  printDetails: function(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

const newObj=Object.create(obj);
newObj.name="Mithun";

newObj.printDetails();