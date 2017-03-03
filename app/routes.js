var express = require('express');
var router = express.Router();
var multer=require('multer');
var mongoosePaginate = require('mongoose-paginate');
var projectController = require('./controllers/projectController');
var storage=multer.diskStorage({destination:function(req,file,cb){
    cb(null,'/home/mirette/Desktop/SE-Mini-Project-Mirette/uploads')},filename:function(req,file,cb){
        cb(null,file.originalname )}});
        var upload=multer({storage:storage});

router.get('/',function(req,res){res.render('HomeView')});

router.get('/login',function(req,res){res.render('LoginView',{StudentNotFound:0,empty:0})});

router.get('/viewProfile',projectController.getWork);

router.get('/SignUp1',function(req,res){res.render('SignUP',{empty:0,repeat:0})});

router.get('/Login1',function(req,res){res.render('LoginView',{StudentNotFound:0,empty:0})});
router.get('/ViewProjects1', projectController.getAllProjectsandStudents);
router.post('/createNew',function(req,res){res.render('AddWork',{StudentNotFound:0,empty:0})});
router.post('/userTable',upload.single("img"), projectController.createStudent);

router.post('/check',projectController.LoginMethod);
router.post('/Portofolio',upload.single("img2"),projectController.createWork);
router.get('/Portofolio',projectController.createWork);

module.exports = router;