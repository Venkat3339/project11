import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
signin!:FormGroup  
constructor(private fb:FormBuilder){
  this.signin=this.fb.group([{
    email:['',[Validators.required,,Validators.email]],
    username:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(6),]]
  }])
}
}
