import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../model/blog';

@Pipe({
  name: 'category',
  pure:false
})
export class CategoryPipe implements PipeTransform {

  transform(blogs: Blog[], category?: any): any {
    //console.log("category "+category);
    if (category=='all')
      return blogs;
    else
      return blogs.filter((blog)=>blog.category==category);
  }

}
