interface Profile{
    name:string;
    age:number;
    email:string;
    }
    function updateProfile(myProfile:Profile,updates:{}){
        return{...myProfile,...updates}
    
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 29 }));
    