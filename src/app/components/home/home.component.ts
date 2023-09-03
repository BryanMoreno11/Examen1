import { Component } from '@angular/core';
import { ServicioService, Registro } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

registros:Registro[]=[];

ngOnInit(){
this.registros=this.registro_servicio.registros;
}

modificarRegistro(registro:Registro){
console.log(registro);
this.router.navigate(['/modificar',this.registros.indexOf(registro)])
}
eliminarRegistro(registro:Registro){

    this.registro_servicio.eliminar_Registro(this.registros.indexOf(registro))
}




constructor(public registro_servicio:ServicioService, private router:Router){

}







}
/*
<h2>Registro de usuario</h2>
<br>
<form>
    <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" [(ngModel)]="email" name="email">
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" [(ngModel)]="password" name="password">
    </div>
    <input type="submit" value="Enviar" (click)="guardar()">
</form>
*/



/*
<h2>Login de usuarios</h2>
<br>
<form>
    <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" [(ngModel)]="email" name="email">
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" [(ngModel)]="password" name="password">
    </div>
    <input type="submit" value="Enviar" (click)="guardar()">
</form>
<br>
<button class="btn btn-info" (click)="looginGoogle()">Login with Google</button>
*/

/*
Routing
importaciones
import { canActivate,AuthGuard } from '@angular/fire/auth-guard';
{path:'formulario', component: FormularioComponent,canActivate:[AuthGuard]}
*/