import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

//Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos de inicio de sesión
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { RegistroComponent } from './pages/registro/registro.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { CountriesComponent } from './pages/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesCodeComponent } from './pages/countries-code/countries-code.component';

// Api Rest



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    PruebaComponent,
    RegistroComponent,
    CountriesComponent,
    CountriesCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '396270216955-geqnaa86umm942m08t5dcrsi5ckt0q6s.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('777469982841894')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
