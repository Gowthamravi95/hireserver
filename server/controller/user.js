const Userdb =require( "../model/schema" )

exports.registerUser = (req,res)=>{
   
    const user = new Userdb({
        userName : req.body.userName,
        email : req.body.email,
        password: req.body.password,
        role:req.body.role,

        
        
    })
    user.save(user)
    .then(data=>{
        res.send(data)
    })
}

exports.allUser =async(req,res)=>{
    var users = await Userdb.find();
    res.json(users);
}

