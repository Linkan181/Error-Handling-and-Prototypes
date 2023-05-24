function outerFunction(arrayOfProduct){

    return function innerFunction(cat){
        let result=arrayOfProduct.filter(function(item){
            return item.catagory===cat;
        })
        console.log(result);
    }
}

//Array of Products

const products=[
    {name:"Shirt",catagory:"clothing"},
    {name:"Pants",catagory:"clothing"},
    {name:"Hat",catagory:"Accessories"},
    {name:"Sunglasses",catagory:"Accessories"}
];

const filtered=outerFunction(products);
filtered("Accessories");

// outerFunction(products)("clothing");