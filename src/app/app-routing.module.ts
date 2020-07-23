import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

//routes is a JSON Array where each object in the array defines a routes in (key,value) pairs
//key is the path that browser will look at while browsing to corrosponding component
//and value is the component the user will be routed to 

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',   //we don't define component here we directly nwmed the path for which that component loads
    pathMatch:'full'     //ensure if the paths matches completely
  },{

    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
     component: LoginComponent
  },{

    path: 'myblogs',
    component:MyblogsComponent,
    canActivate:[AuthGuard]

  },{
    path:'profile/:id',
    component:ProfileComponent,
    canActivate:[AuthGuard]

  },{
    path:'edit-profile/:id',
    component:EditProfileComponent,
    canActivate:[AuthGuard]
  },{
    path:'view/:postId',
    component:ViewComponent

  },{
    path : '**',
    redirectTo:'home'    
  }
];  



@NgModule({
  imports: [RouterModule.forRoot(routes)],  //it indaicates we will use routes array for the purpose of routing
  exports: [RouterModule]
})

export class AppRoutingModule { }
