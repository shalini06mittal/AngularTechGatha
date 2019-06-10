import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Blog } from '../model/blog';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpblogService {

  bloglist:Blog[] = [];
  url:string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getBlogs():Observable<Blog[]>
  {
      return this.http.get<Blog[]>(this.url);
  }
  getBlog(id):Observable<Blog>
  {
      return this.http.get<Blog>(this.url+"/blog/"+id);
  }
  addBlog(blog:Blog)
   {
    return this.http.post(this.url,blog);
   }
  deleteBlog(id){   
        return this.http.delete(this.url+"/"+id);   
  }
  editBlog(blog){
    return this.http.put(this.url,blog);
  }
}
