import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getPostDetails() {
    this.router.navigate(['posts', this.post.id, 'details'], {
      state: this.post
    })
  }
}
