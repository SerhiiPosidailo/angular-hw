import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

import {PostsComponent} from "../../components/posts/posts.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    PostsComponent,
    NgForOf
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent{

}
