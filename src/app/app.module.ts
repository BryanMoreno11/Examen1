import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
//Importaciones personalizadas
import { FormsModule } from '@angular/forms';
import { ServicioService } from './services/servicio.service';
import { HomeComponent } from './components/home/home.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaPipe,
    RegistroComponent,
    ModificarComponent,
    LoginComponent,
    RegistrarseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
