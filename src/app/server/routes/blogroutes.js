var db = require('./dbdemo')
const jwt = require('jsonwebtoken')
var appRouter = function(app) {
    app.get("/", function(req, res) {
        db.getBlogs(function(data){
            let payload = {subject: 1}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
            //res.send(data);
        });
    });
    app.post("/", function(req, res) {      
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
}
module.exports = appRouter;