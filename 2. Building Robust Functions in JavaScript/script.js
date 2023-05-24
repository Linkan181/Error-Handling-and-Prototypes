

function getPerson(obj){
    //A default object for check
    let defObject={
        name:"anyname",
        age:00
    }
    
    let keysOfODefObject=Object.keys(defObject);

    try{
        for(let key of keysOfODefObject){
            if(!obj.hasOwnProperty(key)){
               throw new Error("Invalid parameter type")
            }
            
        }
    
    
        console.log("Name:",obj.name,","," Age:",obj.age);
    }
    catch(error){
         console.log(error.message);
    }
  
}


getPerson({name:"Linkan",age:19});
getPerson({name:"Himanshu",age:30});
getPerson({name:"Rinku",address:"atHome"})
getPerson(["name","age"]);