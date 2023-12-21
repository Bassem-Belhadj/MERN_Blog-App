const express =require ('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const { default: mongoose } = require('mongoose');

const salt = bcrypt.genSaltSync(10);
app.use(cors());
app.use(express.json()); 

mongoose.connect('mongodb+srv://bassembelhajboubaker11:Xsip71Tdi5qBtEc4@cluster0.ayozz7k.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res)=>{
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });   
        res.json(userDoc); 
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }    
});

app.post('/login' , async (req,res) => {
    const {username, password}=req.body;
    const userDoc = await user.findOne({username}) ;
    bcrypt.compareSync("B4c0/\/", hash);res0
})
app.listen(4000);

//mongodb+srv://bassembelhajboubaker11:Xsip71Tdi5qBtEc4@cluster0.ayozz7k.mongodb.net/?retryWrites=true&w=majority