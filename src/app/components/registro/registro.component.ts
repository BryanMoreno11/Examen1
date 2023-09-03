import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
//variables
codigo:number=0;
fecha:string="";
cliente:string="";
tipo_Interacion:string="";
descripcion:string="";
//Crear registro
insertRegistro(){
this.registro_servicio.insertar_Registro(this.codigo,this.fecha,this.cliente,this.tipo_Interacion,this.descripcion);
console.log(this.codigo);
}



constructor(private registro_servicio:ServicioService){
 
}

}




