var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port:8889,
  database:"angular"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!!!");
}); 

function getBlogs(callback)
{
    sql = 'select * from blog';
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get All Blogs : " );
      callback(result);
    });
}
function getBlog(id,callback)
{
    sql = 'select * from blog where id = '+id;
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get Blog for Id: "+id );
      callback(result);
    });
}
function addBlogs(blog, callback)
{
    sql = "insert into blog(title,description,date,time,category) values('"+blog.title+"','"+blog.description+"','"+blog.date+"','"+blog.time+"','"+blog.category+"')";
      console.log(blog);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Inserted: " );
      callback(result);
    });
}
function editBlog(blog, callback)
{
    sql = "update blog set title = '"+blog.title+"',description='"+blog.description+"',category='"+blog.category+"' where id = "+blog.id;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Updatng DB: " );
      callback(result);
    });
}
function deleteBlog(id,callback)
{
    sql = 'delete from blog where id = '+id;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deleted: " );
      callback('deleted');
    });
}
exports.getBlogs = getBlogs;
exports.addBlog = addBlogs;
exports.deleteBlog = deleteBlog;
exports.getBlog = getBlog;
exports.editBlog = editBlog;