import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log({senha: this.senha, login: this.usuario})
  }
}
