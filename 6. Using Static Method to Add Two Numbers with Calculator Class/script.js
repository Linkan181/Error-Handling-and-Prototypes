class Calculator{


    static add(a,b){
        return a+b;
    }
}

// let sum=new Calculator();

let sum=Calculator.add(4,5);
console.log(sum);