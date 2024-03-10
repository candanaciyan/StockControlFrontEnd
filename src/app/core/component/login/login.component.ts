import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})





export class LoginComponent {
  email='';
  password ='';
  login(){
  console.log(this.email,this.password);
  
  
}
}