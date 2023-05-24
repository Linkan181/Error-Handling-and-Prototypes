class User{
    username;
    password;

    constructor(user,p){
        this.username=user;
        this.password=p;
    }

    setproperties(pass){

        
        if(pass.length>=8 && /\d/.test(pass) && /[A-Z]/.test(pass)){
            this.password=pass;
        }
        else{
            console.log("Your new Password is not set because of invalid character set!");
            console.log("Password must have at least 8 character,one number and one Uppercase letter")
        }


    }


    getPassword(){
        console.log(this.password.replace(/./g,"*"));
    }
}

let user1=new User("UserName","Pas2");
user1.setproperties("abcjal");
user1.getPassword();