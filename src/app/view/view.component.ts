import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post:any={};
  postId:string;

  constructor(public route:ActivatedRoute, public zone:NgZone) { 

    let postId=this.route.snapshot.paramMap.get("postId");
    this.postId=postId;
    
    firebase.firestore().collection("posts").doc(postId).get()
    .then((doc)=>{
        this.zone.run(()=>{
          this.post=doc.data();
          console.log(this.post);
        })
    })
  }

  ngOnInit(): void {
  }

}
