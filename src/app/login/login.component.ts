import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';   
import { Router } from '@angular/router';      //importing services


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  myForm :FormGroup;
  message:string="";
  userError:any;

  
  //injecting services - via parameters
  constructor(public fb:FormBuilder, public authService:AuthService, public router:Router) {

    this.myForm= this.fb.group({

      email:['',[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    })
   }

  
  
   ngOnInit(): void {
  }

  
  
  onSubmit(myForm){

    let email: string = myForm.value.email;
    let password: string = myForm.value.password;

    this.authService.login(email,password)
    
    .then((response)=>{
      console.log(response);
      this.message="You have been logged in successfully!!"
      this.router.navigate(['/myblogs'])

    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    }
    )

  }

}
