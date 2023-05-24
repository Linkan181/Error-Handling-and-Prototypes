function numberChecker(arr){

    return function(number){
       console.log( arr.includes(number));
    }
    
}

const tester=numberChecker([1,4,5,4,355,7]);
tester(5);
tester(355)
tester(777)

