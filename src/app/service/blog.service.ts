import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { blogs } from '../model/bloglist';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  bloglist:Blog[];
  constructor() {
    this.bloglist = blogs;
   }
   addBlog(blog:Blog)
   {
    let id = this.bloglist.length + 1;
     blog.id = id;
     this.bloglist.push(blog);
     console.log(this.bloglist);
   }
   getBlogs()
  {
    return this.bloglist;
  }
  deleteBlog(blog){
    for(var j=0;j<this.bloglist.length;j++){
      if(this.bloglist[j]===blog){
        this.bloglist.splice(j,1);
      }
    }
  }
editBlog(blog){
  for(var j=0;j<this.bloglist.length;j++){
    if(this.bloglist[j].id===blog.id){
      this.bloglist[j].title = blog.title;
      this.bloglist[j].description=blog.desc;
      this.bloglist[j].category=blog.category;
    }
  }
}

}
