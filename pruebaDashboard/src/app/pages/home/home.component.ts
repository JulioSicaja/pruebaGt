import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Modulos de inicio de sesión
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import Swal from 'sweetalert2';
import { AuthService } from './../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css'
  ],
  providers: [AuthService],
})
export class HomeComponent implements OnInit {
  user!: SocialUser;
  loggedIn!: boolean;
  
  nameUser!: any;
  emailUser!: any;
  photoUser!: any;
  constructor(private authSvc: AuthService, private router: Router, private authService: SocialAuthService) { 
    
  }
  
 async ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;       //Obtiene el usuario
      console.log(this.user);
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      if(!this.loggedIn){
        // alert("No inicio sesión con google");
  
        this.authSvc.obtenerUsuario().then((resolve:any)=>{
          // console.log(resolve);
          if (resolve) {
            this.nameUser = resolve.providerData[0]?.displayName;
            this.emailUser = resolve.providerData[0]?.email; //asignar email
            this.photoUser = resolve.providerData[0]?.photoURL; //asignar photo
          }else{
            Swal.fire({title:"Oops...", icon:"error", text:"No has iniciado sesión"});
            this.router.navigate(['/']);
          }
        });
      }else{
        //Inicio de sesión con google o FB 
        this.nameUser = this.user.name;  //asignar nombre
        this.emailUser = this.user.email; //asignar email
        this.photoUser = this.user.photoUrl; //asignar photo
      }
    });
   
    
  }
  signOut(): void {
    this.authService.signOut();
    this.authSvc.salir();
  }

}
