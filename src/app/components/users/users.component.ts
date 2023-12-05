import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {UserService} from "../../service";
import {IPost, IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[]
  userPost: IPost[]

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserId(userId: number) {
    this.userService.getById(userId).subscribe(value => this.userPost = value)
  }
}
