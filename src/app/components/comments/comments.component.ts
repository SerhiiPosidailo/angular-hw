import {Component, Input} from '@angular/core';

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input()
  comment: IComment;

}
