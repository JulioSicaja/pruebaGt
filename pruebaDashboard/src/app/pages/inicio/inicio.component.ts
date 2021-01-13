import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'ngx-angular-social-login';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from './../auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: [
    './inicio.component.css'
  ],
  providers: [AuthService]
})
export class InicioComponent implements OnInit {
  // public titulo: string;
  user!: SocialUser;
  loggedIn!: boolean;
  users!: any;
  //Capturar datos del formulario
  registroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService,private router: Router,private authService: SocialAuthService) { 
    // this.titulo = "Hola componentess";
    // console.log(this.titulo); 
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

 singInEmail(){
    
    try {
      // console.log(this.registroForm.value);
      const {email, password} = this.registroForm.value;
      this.authSvc.ingresar(email, password);
      this.authSvc.obtenerUsuario().then((resolve)=>{
        // console.log(resolve);
        (resolve)? this.router.navigate(['/inicio']): "";
      });
    } catch (error) {
      console.log(error);
    }
  }
  async ngOnInit() {
    this.authSvc.obtenerUsuario().then((resolve)=>{
      // console.log(resolve);
      (resolve)? this.router.navigate(['/inicio']): "";
    });
    
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.router.navigate(['/inicio'])
      }
    });

    
  }

}
