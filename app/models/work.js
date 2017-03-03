var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongoosePages = require('mongoose-pages');
var WorkSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true 
    },
    URL:String,
    
code:String,    
     img2: String,
     
   
});
WorkSchema.plugin(mongoosePaginate);
//mongoosePages.skip(projectSchema);

var Project = mongoose.model("project", WorkSchema);

module.exports = Project;