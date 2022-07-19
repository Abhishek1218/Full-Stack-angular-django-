import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router} from '@angular/router'; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  

  constructor(private http: HttpClient, private service: UserService, private modalService: NgbModal,
    private router:Router){ }

    // updateForm:FormGroup;
    formData:any={
      "Id": '',
      "Email": "",
      "userName": "",
      "title": "",
      "SCOST": '',
      "DCOST": '',
      "SOLD": ''
    };

  users:any;
  closeResult = '';
  Id = '';
  Email = '';
  Name = '';
  Title = '';
  scost:string ='';
  dcost:string='';
  sold:string='';

 
  
  ngOnInit(): void {    
    this.service.getDetails().subscribe((response:any) => {
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

  logout() {
    window.location.reload();
  }


  editValues(i:any){
    this.Id = this.users[i].Id;
    this.Email = this.users[i].Email;
    this.Name = this.users[i].userName;
    this.Title = this.users[i].title;
    this.scost = this.users[i].SCOST;
    this.dcost = this.users[i].DCOST;
    this.sold = this.users[i].SOLD;
  }
  
  saveData(){
    this.formData['Id'] = this.Id;
    this.formData['Email'] = this.Email;
    this.formData['userName'] = this.Name;
    this.formData['title'] = this.Title;
    this.formData['SCOST'] = this.scost;
    this.formData['DCOST'] = this.dcost;
    this.formData['SOLD'] = this.sold;

    this.service.updateDetails(this.formData).subscribe((response:any)=>{
      console.log(response);
    })
  }

  addContent(){
    this.router.navigate(['/addUserDetails'])
  }

  delete(data:number){
    console.log(data);
    if(confirm("Do you really want to delete")){
      this.users.splice(data)
      this.service.deleteDetails(data).subscribe(result =>{
        console.log(result)
      })
    }
  }
 

}
