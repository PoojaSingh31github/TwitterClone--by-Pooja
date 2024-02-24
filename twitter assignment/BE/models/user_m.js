const mongoose =require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true, 
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true,
    unique:true
  },
  address:{
    type:String,
    default:null
  },
  profileImg: {
    type: String,
    default: null
},
DOB: {
    type: Date,
    default:null
},
followers: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
],
following: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
],
  isAdmin: {
    type: Boolean,
    default: false
  }
});
const UserModel = mongoose.model("UserModel", UserSchema)
module.exports=UserModel;