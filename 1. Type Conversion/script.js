let input="101010";


function convertToNumber(input){
    let num=Number(input);

  if(isNaN(num)){
    throw new Error("Invalid number");
  }
  return num;
}


try{
  console.log(convertToNumber(input));
}
catch(error){
  console.log(error.message);
}

