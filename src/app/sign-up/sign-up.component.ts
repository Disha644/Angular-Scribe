import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  message: string="";
  userError: any;


  constructor(public fb:FormBuilder, public authService:AuthService, public router:Router) {

    this.myForm=this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
    },{
      validator:this.checkIfMatchingPasswords("password", "confirmPassword")
    })
   }



   checkIfMatchingPasswords(passwordKey : string,confirmPasswordKey:string){
     return(group: FormGroup)=> {
       let password=group.controls[passwordKey]
       let confirmPassword=group.controls[confirmPasswordKey]

       if(password.value == confirmPassword.value){
         return;
       }
       else{
         confirmPassword.setErrors({   
           notEqualToPassword : true   //this is not an existing error we defined custom error
         })                            //using setErrors method  
       }
     }
   }




   onSubmit(myForm){

    //console.log(myForm.value)
    let email: string = myForm.value.email
    let password: string = myForm.value.password
    let firstName: string = myForm.value.firstName
    let lastName: string = myForm.value.lastName

    this.authService.signup(email, password, firstName, lastName)
    .then((user:any)=>{

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName:myForm.value.firstName,
        lastName:myForm.value.lastName,
        email:myForm.value.email,
        photoURL:user.photoURL,
        intrests:"",
        bio : "",
        hobbies:""     
      }).then(()=>{

        this.message="You have been signed in successfully!!"
        this.router.navigate(['/myblogs']);
      })
          
    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })
  }


    ngOnInit(): void {
  }

}





