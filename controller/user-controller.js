const User = require('../module/user-schema')

const Signup = async (req,res) =>{
    try {
        const  user = req.body;
        const olduser = await User.findOne({username: req.body.username})
        if(olduser){
            return res.status(401).json("user different user name")
        }
        const oldemail = await User.findOne({email: req.body.email})
        if(oldemail){
            return res.status(401).json("user different user name")
        }
        const oldphone = await User.findOne({phone: req.body.phone})
        if(oldphone){
            return res.status(401).json("user different phone")
        }
   
   const newuser = new User(user);
   await newuser.save();
   return res.status(200).json(newuser)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const Login = async (req,res) =>{
    try {
        const  username = req.body.username;
        const  password = req.body.password;
       
        if(!username && !password){
            return res.status(400).json("Both field required")
        }
        const user = await User.findOne({username:req.body.username, password:req.body.password})
        if(!user){
            return res.status(401).json("Invalid login")
            // console.log(user)
        }
        // const olduser = await User.findOne({username: req.body.username})
        // if(!olduser){
        //     return res.status(401).json("user not found")
        // }
        // const oldpassword = await User.findOne({password: req.body.password})
        // if(!oldpassword){
        //     return res.status(401).json("wrong password")
        // }
        return res.status(200).json(user)
   
  
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    Signup,
    Login
}