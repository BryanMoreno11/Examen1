import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private registro_servicio: ServicioService, private router:Router) {



    
  }
  looginGoogle(){
    this.registro_servicio.loginGoogle()
    .then(response=>{
    this.router.navigate(['/home']);
    })
    .catch(error=>{
      window.alert("Error con el Login");
    })
  }
}
