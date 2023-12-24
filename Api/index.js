const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const mongoose = require('mongoose'); //  import mongoose
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'kl,clk,fklldj65';
const cookieParser = require('cookie-parser')

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://bassembelhajboubaker11:Xsip71Tdi5qBtEc4@cluster0.ayozz7k.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // login in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('ok');
    });
    // res.json();
  } else {
    res.status(400).json('wrong credentials');
  }
});
app.get('/porfile', (req, res)=>{
    const {token} =req.cookies;
    jwt.verify(token, secret ,{},(err,info)=>{
        if(err) throw err ;
        res.json(info);
    })
    res.json(req.cookies);

})
app.listen(4000);
//mongodb+srv://bassembelhajboubaker11:Xsip71Tdi5qBtEc4@cluster0.ayozz7k.mongodb.net/?retryWrites=true&w=majority