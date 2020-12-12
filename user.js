class User{
    constructor(){
        this.name = null;
        this.email = null;
        //this.index = null;
    }

    getUserCount(){
        var UserCountRef = database.ref('Usercount');
        UserCountRef.on("value",(data)=>{
        userCount = data.val();
        })
    }
    updateUsercount(count){
        database.ref('Usercount').update({
            Usercount : count
        })
    }
    updateUser(name,email){
        var user = 'Users'+index;
        database.ref(user).set({
            name : name,
            email : email
        })
    }
}