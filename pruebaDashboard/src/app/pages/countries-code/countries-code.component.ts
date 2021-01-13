import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../auth/services/country.service';

@Component({
  selector: 'app-countries-code',
  templateUrl: './countries-code.component.html',
  styleUrls: ['./countries-code.component.css']
})
export class CountriesCodeComponent implements OnInit {

  idCountry!:any;
  countriesData !: {name: string, alpha3Code: string, capital: string, subregion: string, population: string, borders: Array<string>}; //Datos del Api Rest
  constructor(private ruta: Router, private _route: ActivatedRoute, private dataCountry:CountryService) { }

  ngOnInit(): void {
    this.idCountry=this._route.snapshot.paramMap.get('id'); //Obtener codigo para Api Rest
    console.log(this.idCountry);
    this.dataCountry.getCountriesbyCode(this.idCountry).subscribe((data)=>{  //Obtener data del ApiRest
      // console.log(data);
      this.countriesData=data;
    });
  }

  regresar(){ //Regresar a los datos
    this.ruta.navigate(['/inicio']);
  }
  regBord(dataId:string){
    // alert("Cambiando datos");
    this.ruta.navigate(['/registroCod',dataId]);  //Cargar nuevos datos
    this.dataCountry.getCountriesbyCode(dataId).subscribe((data)=>{
      // console.log(data);
      this.countriesData=data;
    });
  }
}
