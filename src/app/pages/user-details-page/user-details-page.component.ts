import {Component} from '@angular/core';
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {UserService} from "../../service";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    RouterOutlet
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {

}
