import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

import {IPost, IUser} from "../../interfaces";
import {PostsService, UserService} from "../../service";
import {PostsPageComponent} from "../../pages";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    PostsPageComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  user: IUser;
  posts:IPost[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private postsService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
      this.postsService.getPostById(this.user.id).subscribe(value => this.posts = value)
    })

  }

  getPost() {
    this.router.navigate(['posts'], {
      relativeTo: this.activatedRoute,
      state: this.posts
    })
  }
}
