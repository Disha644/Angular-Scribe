import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import* as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input('post') post:any;
  @Output('onDelete')onDelete =new EventEmitter();
  postData:any={};
  user:any={};
  postContent:any;


  constructor() { }

  ngOnInit(): void {

    this.postData=this.post.data();
    this.user=firebase.auth().currentUser;
  }

  delete(){
    firebase.firestore().collection("posts").doc(this.post.id).delete()
    .then(()=>{
      this.onDelete.emit();
    })
  }

}
