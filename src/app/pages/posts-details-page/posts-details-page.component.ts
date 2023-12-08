import { Component } from '@angular/core';

import {PostDetailsComponent} from "../../components/post-details/post-details.component";

@Component({
  selector: 'app-posts-details-page',
  standalone: true,
  imports: [
    PostDetailsComponent
  ],
  templateUrl: './posts-details-page.component.html',
  styleUrl: './posts-details-page.component.css'
})
export class PostsDetailsPageComponent {

}
