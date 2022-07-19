import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private formBuilder: FormBuilder,
     private service:UserService) { }

  reactiveForm!: FormGroup;
  isSubmitted:boolean = false;


  get formControls(){
    return this.reactiveForm.controls;
  }

  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';



  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(this.emailRegex)]],
      password:['',[Validators.required, Validators.pattern(this.passwordRegex)]]
    })
  }


  navigateToHomePage(){
    this.isSubmitted = true;
    if(this.reactiveForm.invalid){
      alert('Please enter your Email and Password');
      this.reactiveForm.reset();
      return;
    }
    this.service.getData().subscribe(res =>{
      const admin = res.find((a:any) =>{
        return a.userEmail === this.reactiveForm.value.email
        && a.userPassword === this.reactiveForm.value.password && a.isAdmin === true
      })

      if(admin){
        alert("Admin Login Success");
        this.reactiveForm.reset();
        this.router.navigate(['/users']);
      }
      else{
        alert("You are not an admin");
      }
    },
    err =>{
      alert("Something went wrong");
    }
    )
    this.isSubmitted = false;
  }

}
