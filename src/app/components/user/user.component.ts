import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser

  userId:number


  @Output()
  getPostEvent = new EventEmitter<number>()

  getPost():void {
    this.getPostEvent.emit(this.user.id)
  }
}
