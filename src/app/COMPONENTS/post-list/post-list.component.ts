import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostsService } from '../../SERVICES/posts.service';
import { List } from 'immutable';
import { Post } from '../../MODELS/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  postList: List<Post>;
  filteredPosts: Array<Post>;
  selectedPosts: Array<Post>;
  isAllSelected: boolean;

  constructor(private postServe: PostsService) { }

  ngOnInit() {
    this.selectedPosts = Array<Post>();
    this.GetPosts();
  }

  GetPosts() {
    this.postServe.GetPosts()
      .subscribe((resp: List<Post>) => {
        this.postList = resp;
      })

  }
  DeletePost(id: number) {
    this.postServe.DeletePost(id)
      .subscribe(resp => console.log(resp))
  }
  FilterPosts(searchItem) {
    this.filteredPosts = this.postList.filter(data => data.title.includes(searchItem)).toArray();
  }

  SelectListChanged(post: Post) {
    if (post.isSelected === true) {
      this.selectedPosts.push(post);
    }
    else if (post.isSelected === false) {
      const selected: number = this.selectedPosts.findIndex(data => data.id === post.id);
      if (selected !== -1) {
        this.selectedPosts.splice(selected);
      }
    }
    console.log(this.selectedPosts.length);
  }

  SelectListAllChanged() {
    if (this.isAllSelected) {
      this.filteredPosts.forEach(post => post.isSelected = true);
    }
    else {
      this.filteredPosts.forEach(post => post.isSelected = false);
    }
  }
}
