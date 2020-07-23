import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { PostsComponent } from './posts/posts.component';
import { ViewComponent } from './view/view.component';
import { CommentComponent } from './comment/comment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




let firebaseConfig = {
  apiKey: "AIzaSyA6uOxlv3DuaypIhvdz-4lJRq2-VkIH1EM",
  authDomain: "scribe-253da.firebaseapp.com",
  databaseURL: "https://scribe-253da.firebaseio.com",
  projectId: "scribe-253da",
  storageBucket: "scribe-253da.appspot.com",
  messagingSenderId: "456234427304",
  appId: "1:456234427304:web:adf4f151f8b5c85fadf39d",
  measurementId: "G-4XZE62R0TK"
};

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostsComponent,
    ViewComponent,
    CommentComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
