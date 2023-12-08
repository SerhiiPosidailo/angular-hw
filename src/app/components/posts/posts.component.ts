import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";

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
