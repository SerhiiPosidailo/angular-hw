import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent {
  @Input()
  posts: IPost[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
    this.posts = this.router.getCurrentNavigation()?.extras.state as IPost[]
  }
}
