import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class NamePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPosts = []
    for(const post of value){
      if (post.name) {
        
      }
    }
  }
}