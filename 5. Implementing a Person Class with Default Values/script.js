class Person{
    name;
    age;

    constructor(n="Unknown",a=0){
        this.name=n;
        this.age=a;
    }

    getDetail(){
        return (`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person1=new Person("Rahul",30);
console.log(person1.getDetail());

let person2=new Person();
console.log(person2.getDetail());