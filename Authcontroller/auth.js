const Login = (req,res)=>{
    res.send("Hello login here")
}

const userVerification = (req,res)=>{
    res.send("Hello User here")
}

module.exports = {Login,userVerification}