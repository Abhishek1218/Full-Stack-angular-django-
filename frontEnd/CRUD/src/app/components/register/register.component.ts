import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, Form } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  reactiveForm!: FormGroup;
  isSubmitted:boolean = false;

  constructor(private route: Router, private formBuilder: FormBuilder, private http: HttpClient, 
      private postService:UserService) { }

  get formControls(){
    return this.reactiveForm.controls;
  }
 
  emailRegex ='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordRegex='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';  
  ngOnInit(): void {
      this.reactiveForm = this.formBuilder.group({
        userEmail:['',[Validators.required, Validators.pattern(this.emailRegex)]],
        userPassword:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
        isAdmin: [{value: 'false', disabled: true}],
        Mobile:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
      })
  }

  navigateToLogin(){
    this.isSubmitted = true;
    if(this.reactiveForm.invalid){
      alert("Please provide valid credentials")
      return;
    }
    this.postService.postData(this.reactiveForm.value)
    .subscribe(res =>{
      alert("Registration successful");
      console.log(res);
      console.log(this.reactiveForm.value);
      this.reactiveForm.reset();
    },
    err=>{
      alert("something went wrong")
    })
    this.route.navigate(['/']);
    this.isSubmitted = false;
  }

  navigateToLoginPage(){
    this.route.navigate(['/']);
  }


}
