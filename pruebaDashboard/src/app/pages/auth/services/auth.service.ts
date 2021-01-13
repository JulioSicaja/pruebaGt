import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import {  auth  } from 'firebase/app';
// import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';


@Injectable()
export class AuthService {
  // public user!:User;

  constructor(private afAuth: AngularFireAuth) { }

  async ingresar(email:string, password:string){
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
      // return result;
    } catch (error) {
      // console.log(error);
      return Swal.fire({title:"Error", icon:"error", text:error});
    }
    
  }
  async registrar(email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      // console.log(error);
      return Swal.fire({title:"Error", icon:"error", text:error});
    }
    
  }

  async salir(){
    try {
      await this.afAuth.signOut();
    //Redirigir
    } catch (error) {
      console.log(error);
      
    }
    
  }
  obtenerUsuario(){
    // return await this.afAuth.authState.pipe(first()).toPromise();
    return new Promise((resolve, reject)=>{
      if(this.afAuth.authState.pipe(first())){
        resolve(this.afAuth.authState.pipe(first()).toPromise())
      }else{
        reject(null);
      }
    });
  }
}
