import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  //variables
  busqueda:string="";

  set_busqueda(){
    this.registro_servicio.busqueda=this.busqueda;


  }

  
  constructor(private registro_servicio:ServicioService){



  }


}
