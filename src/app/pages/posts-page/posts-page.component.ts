import {Component, Input} from '@angular/core';
import {PostsComponent} from "../../components/posts/posts.component";
import {NgForOf} from "@angular/common";
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

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
