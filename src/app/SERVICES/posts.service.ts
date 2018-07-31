import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { List } from 'immutable'
import { Post } from '../MODELS/Post';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  GetPosts(): Observable<List<Post>> {
    return this.http.get(this.url)
      .pipe(
        map((resp: Array<any>) => {
          const postArray = new Array<Post>();
          resp.forEach(element => {
            postArray.push(new Post(element.userId, element.id, element.title, element.body))
          })
          return List(postArray);
        })
      )
  }
  DeletePost(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
