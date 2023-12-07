import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts";
import {
  CommentsPageComponent,
  PostsDetailsPageComponent,
  PostsPageComponent,
  UserDetailsPageComponent,
  UsersPageComponent
} from "./pages";


export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {path: 'users', component: UsersPageComponent},
      {
        path: 'users/:userId', component: UserDetailsPageComponent, children: [
          {path: 'posts', component: PostsPageComponent}
        ]
      },
      {
        path: 'posts/:id', component: PostsDetailsPageComponent, children: [
          {path: 'comments', component: CommentsPageComponent}
        ]
      }
    ]
  },

];
