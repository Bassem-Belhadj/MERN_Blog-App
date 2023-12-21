const mongoose = require('mongoose');
const {Shema} =mongoose;

const UserShema =new Shema({
   username : {type :String , required: true, min:4, unique:tue},
   password: {type:String, required: true},  
});

const UserModel = model('User' , UserShema);
 module.exports = UserModel;