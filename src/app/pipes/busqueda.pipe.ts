import { Pipe, PipeTransform } from '@angular/core';
import { ServicioService, Registro } from '../services/servicio.service';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: Registro[], arg: string): Registro[] {
   let registros:Registro[]=[];
   for(let registro of value){
    if(registro.cliente.toLowerCase().indexOf(arg.toLocaleLowerCase())>-1 || 
    registro.codigo.toString().toLocaleLowerCase().indexOf(arg.toLocaleLowerCase())>-1 
    ){
      registros.push(registro);
    }

   }
   if(registros.length==0){
    return value;
  }
  return registros;



  }

}
