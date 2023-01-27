const User  = require("../modals/user.modal")




exports.addUser = async (req , res)=>{
    try{
        const user = await User.create(req.body);
        return res.send(user)
    }catch(e){
        return res.status(500).send(e.message)
    }
}

exports.dashboard = async (req , res)=>{
    try {
        const users = await User.find()
        return res.send(users)
    }
    catch (err)
    {
        return res.status(500).send(err.message)
    }
}

exports.randomWord = async (req, res) => {
    try {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomWord = ""
        let num = Math.floor(Math.random() * 5)
        for (let i = 0; i < num; i++)
        {
        randomWord += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return res.send(randomWord)
     
    }catch(e){
        return res.status(500).send(e.message)
    }
}
