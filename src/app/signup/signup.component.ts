import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser'; 
import { ScrumdataService } from '../scrumdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
	  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public usertype = ["Developer", "Owner"];
  scrumUserModel = new Scrumuser('johndoe@linuxjobber.com','','','', '');
  public data: any;
  public error: any;
  
  constructor(private _scrumdataService: ScrumdataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.scrumUserModel)
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      data=>{console.log("Success!", data);
    this.data = data},
      error=>{console.log("Error!", error);
              this.error=error;}      
    )
  
    
    
  }

}