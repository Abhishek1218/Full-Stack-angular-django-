import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  formData:any = {
    "Id": '',
    "userEmail": "",
    "userPassword": "",
    "isAdmin": '',
    "Mobile": ''
  }

  constructor(private userService: UserService,private modalService: NgbModal) { }
  users:any;
  Id = '';
  userEmail='';
  userPassword!: '';
  isAdmin='';
  Mobile='';

  closeResult = '';

  ngOnInit(): void {
    this.userService.getData().subscribe((response:any) =>{
      this.users = response;
    })
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  editValues(i:number){
    this.Id = this.users[i].Id;
    this.userEmail = this.users[i].userEmail;
    this.userPassword = this.users[i].userPassword;
    this.isAdmin = this.users[i].isAdmin;
    this.Mobile = this.users[i].Mobile;
  }

  logout() {
    window.location.reload();
  }

  saveData(){
    this.formData['Id'] = this.Id;
    this.formData['userEmail'] = this.userEmail;
    this.formData['userPassword'] = this.userPassword;
    this.formData['isAdmin'] = this.isAdmin;
    this.formData['Mobile'] = this.Mobile;

    this.userService.updateData(this.formData).subscribe((response:any)=>{
      console.log(response);
    })
  }

  delete(data:number){
    console.log(data);
    if(confirm("Do you really want to delete")){
      this.users.splice(data)
      this.userService.deleteUser(data).subscribe(result =>{
        console.log(result)
      })
    }
  }

}
