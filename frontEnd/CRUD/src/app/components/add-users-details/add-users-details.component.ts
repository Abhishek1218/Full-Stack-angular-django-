import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users-details',
  templateUrl: './add-users-details.component.html',
  styleUrls: ['./add-users-details.component.scss']
})
export class AddUsersDetailsComponent implements OnInit {

  reactiveForm!: FormGroup;
  isSubmitted:boolean = false;

  constructor( private route:Router, private formBuilder: FormBuilder, private http: HttpClient,
    private postService: UserService) { }


  get formControls(){
    return this.reactiveForm.controls;
  }

  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      Email:['',[Validators.required, Validators.pattern(this.emailRegex)]],
      userName:['', Validators.required],
      title:['',Validators.required],
      SCOST:['',Validators.required],
      DCOST:['',Validators.required],
      SOLD:['',Validators.required]
    })
  }

  navigateToHome(data:any){
    this.isSubmitted = true;
    if(this.reactiveForm.invalid){
      alert("Please provide valid credentials");
      return;
    }
    this.postService.postDetails(this.reactiveForm.value)
    .subscribe(res => {
      alert("Registration successfull");
      this.reactiveForm.reset();
    },
    err => {
      alert("Something went wrong")
    })
    this.route.navigate(['/homepage']);
    this.isSubmitted = false;
  }

  navigateToHomePage(){
    this.route.navigate(['/homepage']);
  }

}
