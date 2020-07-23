import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment:string="";
  comments :any[]=[];
  loggedIn:boolean=false;

  @Input('postId')postId:string;



  constructor() {

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn=true;
      }else{
        this.loggedIn=false;
      }
    })

  }



  ngOnInit(): void {
    this.getComments();
  }



  postComment(){

    firebase.firestore().collection("comments").add({
      text:this.comment,
      post:this.postId,
      owner:firebase.auth().currentUser.uid,
      ownerName :firebase.auth().currentUser.displayName,
      created : firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((data)=>{
      console.log("comment is saved!");
      this.comment="";
      this.getComments();

    })
    .catch((error)=>{
      console.log(error);
    })
  }



  getComments(){

    this.comments=[]; //else old comments are added twice to the array

    firebase.firestore().collection("comments")
    .where("post","==",this.postId)
    .orderBy("created","desc")
    .get().then((data)=>{

      //here we are converting data into json objects and then storing them in comments array otherwise
      // we would have to use comments.data.title/content/created...
      data.docs.forEach((commentRef) => {
        this.comments.push(commentRef.data())
      })
    })
  }

}



