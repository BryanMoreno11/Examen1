import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  registro:any={}
  idx:number=-1;
  constructor(private registro_servicio:ServicioService, private  activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.registro= registro_servicio.getRegistro(params['id']);
      this.idx=params['id'];
      console.log(this.registro);
    })
  }
 //variables
codigo:number=0;
fecha:string="";
cliente:string="";
tipo_Interacion:string="";
descripcion:string="";
//Crear registro
updateRegistro(){
console.log(this.idx);
this.registro_servicio.modificar_Registro(this.codigo,this.fecha,this.cliente,this.tipo_Interacion,this.descripcion,this.idx);


}




  

}
