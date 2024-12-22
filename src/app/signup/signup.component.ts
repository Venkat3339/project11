import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  student:Registration=new Registration();
constructor(private service:RegistrationService)
{
  
}
ngOnInit():void{}
submitting():void{
  this.service.submit(this.student).subscribe(
    response=>{
      console.log("Data is successfully inserted",response)
    },
    error=>{
      console.log("Data is successfully inserted",error)
    }
  )
}
}
