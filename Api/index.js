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
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const { default: Post } = require('../Client/src/Post');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://bassem:bassem@cluster0.jvhddkg.mongodb.net/', {
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
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
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
app.post('/logout',(req,res)=>{
  res.cookie('token', '').json(ok)
})

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });
});
app.get('/post', async (req,res)=>{
res.json(
  await Post.find()
  .populate('author', ['username'])
  .sort({createdAt:-1})
  .limite(20)
  );
});
app.get('/post/:id', async (req,res)=>{
  const {id} =req.params;
 const postDoc=await post.findById({id}).populate('author',['username']);
  res.json(postDoc);
})
app.listen(4000);
//mongodb+srv://bassembelhajboubaker11:Xsip71Tdi5qBtEc4@cluster0.ayozz7k.mongodb.net/?retryWrites=true&w=majority