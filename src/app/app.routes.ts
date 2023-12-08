import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts";
import {PostsDetailsPageComponent, PostsPageComponent, UserDetailsPageComponent, UsersPageComponent} from "./pages";


export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {path: 'users', component: UsersPageComponent},
      {
        path: 'users/:id', component: UserDetailsPageComponent, children: [
          {path: 'posts', component: PostsPageComponent}
        ]
      },
      {
        path: 'posts/:id/details', component: PostsDetailsPageComponent
      }
    ]
  }
]
