class Employee{
    name;
    position;
    salary;

    constructor(n,p,s){
        this.name=n;
        this.position=p;
        this.salary=s;
    }

    getSalary(){
        return this.salary;
    }
}

let person=new Employee("Rahul",3,80000);

console.log(person.getSalary());