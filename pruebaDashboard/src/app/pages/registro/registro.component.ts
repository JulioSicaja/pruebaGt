import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from './../auth/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService],
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private ruta:Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  Registrar(){
    console.log(this.registroForm.value);
    const {email, password} = this.registroForm.value;
    this.authSvc.registrar(email, password).then((a:any)=>{
      console.log(a,"ho");
      if(!a.isConfirmed){
        this.authSvc.salir();
        Swal.fire({title:"Excelente", icon:"success", text:"Usuario creado exitosamente!"});
        this.ruta.navigate(['/']);
      }else{
        this.ruta.navigate(['/']);
      }
    });
  }
}
