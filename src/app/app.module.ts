import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SearchPostComponent } from './COMPONENTS/search-post/search-post.component';
import { AddPostComponent } from './COMPONENTS/add-post/add-post.component';
import { PostListComponent } from './COMPONENTS/post-list/post-list.component';
import { PostsService } from './SERVICES/posts.service';
import { FibonacciPipe } from './PIPES/Fibonacci.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchPostComponent,
    AddPostComponent,
    PostListComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
