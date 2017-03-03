let Student = require('../models/student');
let Work = require('../models/work');
var session;
var v=1;
//global.username="";
let projectController = {

    getAllProjectsandStudents: function (req, res) {

        Student.paginate({},{page :v , limit:10},function (err, result1) {
             Work.find(function (err, Tables) {
                res.render('client-view',{"studentTables":result1.docs,Tables,v} );

            })

        });
       
    },

  

    createWork: function (req, res) {
  
        let work = new Work({ "userName": session.UserName, "URL": req.body.URL, "code": req.body.code });
        if(req.file)  {work.img2 = req.file.originalname;
       
        work.save(function (err, Project) {
            if (err) {
                res.send(err.message)
                console.log(err);
            }
            else {

                console.log(Project);
               res.redirect('/viewProfile');
            }
        })
    }else{
        if((req.body.code=="")&&(req.body.URL=="")){
        res.render('AddWork',{empty:1})
    }else{
        work.save(function (err, Project) {
            if (err) {
                res.send(err.message)
                console.log(err);
            }
            else {
  
                    res.redirect('/viewProfile');
            }
        })
}

    }},


    LoginMethod: function (req, res) {
        if(req.body.UserName==""||req.body.Password==""){
            res.render('LoginView',{StudentNotFound: 2})
        }else{
        Student.findOne({ UserName: req.body.UserName, Password: req.body.Password }, function (err, user) {
            if (err) {
                res.send(err.message);
            } else {
                if (!user) {

                    res.render("LoginView", { StudentNotFound: 1 });


                } else {
 
 StudentNotFound:0;
                    session = req.session;
                    session.UserName = req.body.UserName;
                    res.redirect('/viewProfile');


                }
            }

                  })
    }},

    getWork: function (req, res) {



        Work.find({ userName: session.UserName }, function (err, projectsTables) {

            if (err)
                res.send(err.message);
            else{

               
               
                    res.render('student-Profile', {projectsTables});
}})

               

    },
     createStudent: function (req, res) {
        if ((req.body.UserName == "") || (req.body.Password == "") || (req.body.Name == "")) {
            res.render('SignUP', { empty: 1 })
        }
        else {
             Student.findOne({ UserName: req.body.UserName}, function (err, user) {
            if (err) {
                res.send(err.message);
            } else {
                if (!user) {
let student = new Student(req.body);
            if (req.file) {
            student.img = req.file.originalname;

                student.save(function (err, user) {
                    if (err) {
                        res.send(err.message)
                        console.log(err);
                    }
                    else {

                        console.log(user);
                        //   res.send(req.body.img.data);
                        session = req.session;
                        session.UserName = req.body.UserName;
                        res.render('AddWork', { empty: 0 });
                    }
                })
            } else {
                student.save(function (err, user) {
                    if (err) {
                        res.send(err.message)
                        console.log(err);
                    }
                    else {

                        console.log(user);
                        //   res.send(req.body.img.data);
                        session = req.session;
                        session.UserName = req.body.UserName;
                        res.render('AddWork', { empty: 0 });
                    }
                })
            }
        }else{
            res.render('SignUP',{empty:2});
        }

                } 
            }

        
        )

            
    }},
}

module.exports = projectController;
