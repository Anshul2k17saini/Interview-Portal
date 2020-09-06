const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let User =new Schema({  //here we are using Todo Schema which is an object havong properties
    email:{
        type:String
    },
    phoneno:{
        type:Number
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
});
module.exports=mongoose.model('User',User);//making model of Schema todo and exporting it