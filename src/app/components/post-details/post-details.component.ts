import {Component} from '@angular/core';
import {IComment, IPost} from "../../interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../service";
import {CommentsService} from "../../service/comments.service";
import {CommentsComponent} from "../comments/comments.component";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    NgIf,
    CommentsComponent,
    NgForOf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {

  post: IPost
  comments: IComment[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService, private commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(({postId}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!this.post) {
        this.postsService.byId(postId).subscribe(value => this.post = value)
      }

      this.commentsService.byPostId(this.post.userId).subscribe(value => this.comments = value)
    })

  }
}
