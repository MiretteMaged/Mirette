var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongoosePages = require('mongoose-pages');
var StudentSchema = mongoose.Schema({
    UserName:{
        type:String,
        required:true, 
        unique:true
    },
     
    Password:{
        type:String,
         required:true
    },img: String,
    Name:String
    
       
  

})
StudentSchema.plugin(mongoosePaginate);

var User= mongoose.model("userTable", StudentSchema);

module.exports = User;