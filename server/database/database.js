const mongoose =require('mongoose');

const connect =async ()=>{
    try{
        const con =await mongoose.connect("mongodb+srv://gowtham:0605199574@cluster0.2ch706r.mongodb.net/users?retryWrites=true&w=majority")
        console.log(`mongodb connected : ${con.connection.host}`)
    }
    catch (err){
        console.log(err)
    }

}

module.exports =connect;