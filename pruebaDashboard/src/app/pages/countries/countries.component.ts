import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CountryService } from '../auth/services/country.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countriesData !: Array<any>;
  objBuscar !: any;
  tablaBuscar !: any;

  constructor(private ruta:Router, private dataCountry:CountryService) { }

  ngOnInit(): void {
    this.dataCountry.getCountries().subscribe((data)=>{
      console.log(data);
      this.countriesData=data;
    });
  }
  probando(id:string){
    this.ruta.navigate(['registroCod',id]);
  }
  
}
