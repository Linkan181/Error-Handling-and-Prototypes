class car{
    company;
    model;
    year;

    constructor(c,m,y){
        this.company=c;
        this.model=m;
        this.year=y;
    }
    getDescription(){

        return (`This is a ${this.year} ${this.company} ${this.model}`)
    }
}

//create an object of car class
let myCar=new car("skoda","Rapid",2022);

console.log(myCar.getDescription());