var db = require('./dbdemo')
var jwt = require('jsonwebtoken');

function verifyToken(req, res, next)
{
    console.log('verify token')
    if(!req.headers.authorization)
        res.status(401).send('Unauthorized');
    let token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if(token === 'null')
    res.status(401).send('Unauthorized');
    let payload = jwt.verify(token,'secret');
    if(!payload)
    res.status(401).send('Unauthorized');
    req.email = payload.subject;
    next()
    
}
var appRouter = function(app) {
    app.get("/", function(req, res) {
        db.getBlogs(function(data){
            res.send(data);
        });
    });
    app.post("/", verifyToken,function(req, res) {      
        var temp = req.body;
        console.log(temp);
        db.addBlog(temp, function(resp){
            res.send(resp);
        });
    });
    app.put("/", function(req, res) {      
        var temp = req.body;
        console.log('Edit API');
        console.log(temp);
        db.editBlog(temp, function(resp){
            res.send(resp);
        });
    });
    app.delete("/:id", function(req, res) {     
            console.log("delete"); 
            var temp = req.params.id;
            db.deleteBlog(temp, function(resp){
                res.send(resp);
            });
    });
    app.get("/blog/:id", function(req, res) {     
        console.log("Get single blog"); 
        var temp = req.params.id;
        db.getBlog(temp, function(resp){
            console.log(resp);
            res.send(resp);
        });
    });
    app.post('/register',function(req,res){
        console.log('Registering ....');
        var user = req.body;
        db.register(user.email,user.password,function(resp){
            let payload = {subject:user.email}
            let token = jwt.sign(payload,'secret');
            res.status(200).send({token});
        })
    });
    app.post('/login',function(req,res){
        console.log('Login ....');
        var user = req.body;
        console.log(user);
        db.login(user.email,user.password,function(resp){
            let payload = {subject:user.email}
            let token = jwt.sign(payload,'secret');
            console.log(token);
            res.status(200).send({token});
        })
    });
}
module.exports = appRouter;