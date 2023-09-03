import { Injectable } from '@angular/core';
//Importación del servicio firebase y sus métodos
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, signInWithPopup
, GoogleAuthProvider} from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class ServicioService {
//variables
busqueda:string="";
//metodos
insertar_Registro(codigo:number, fecha:string,cliente:string,tipo_Insercion:string,descripcion:string){
let registro:Registro={
codigo:codigo,
fecha:fecha,
cliente:cliente,
tipo_Interacion:tipo_Insercion,
descripcion:descripcion
}
this.registros.push(registro);
}

modificar_Registro(codigo:number, fecha:string,cliente:string,tipo_Insercion:string,descripcion:string,idx:number){
  let registro:Registro={
  codigo:codigo,
  fecha:fecha,
  cliente:cliente,
  tipo_Interacion:tipo_Insercion,
  descripcion:descripcion
  }
  this.registros[idx]==registro;
  }
  eliminar_Registro(idx:number){
  this.registros.splice(idx,1);

  }




getRegistro(index:number){

return this.registros[index];

}







  constructor(private auth:Auth) { }
//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Métodos de login
//Metodo de registro
register(email:string,password:string){
return createUserWithEmailAndPassword(this.auth,email,password);

}
//Metodo login
login(email:string,password:string){
  return signInWithEmailAndPassword(this.auth, email,password);
}
//Metodo login google
loginGoogle(){
  return signInWithPopup(this.auth,new GoogleAuthProvider())
}
//Metodo logout
logout(){
  return signOut(this.auth);
}
//Metodo para confirmar que el usuario esta logueado
userIsLogin(){
  return this.auth.currentUser;
}
//arreglo registros
registros:Registro[]=[
{
  codigo:1,
  fecha:"2023-07-01",
  cliente:"Bryan",
  tipo_Interacion:"telefono fijo",
  descripcion:"Estudiante de la Utmach"

}
,
{
  codigo:2,
  fecha:"2023-08-01",
  cliente:"Jared",
  tipo_Interacion:"celular",
  descripcion:"Estudiante de la Utmach"

}
,
{
  codigo:3,
  fecha:"2023-09-01",
  cliente:"Gonza",
  tipo_Interacion:"instagram",
  descripcion:"Estudiante de la Utmach"

}



]













//>>>>>>Metodos de los componentes
//****Metodos del componente registro
/*
posibles importaciones:
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


email:string="";
  password:string="";
 constructor(
    private _heroes: HeroesService,
    private router: Router
  ) {
    
  }

  guardar() {
    this._heroes.registro(this.email,this.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']
       ) ; window.alert("Ingreso exitoso!");
      })
      .catch(error => {console.log(error);
      window.alert("Ingrese una cuenta válida")});
  }
*/

/*
 email:string="";
  password:string="";

  constructor(private _heroes: HeroesService, private router:Router) {
    
  }

  

  guardar() {
    this._heroes.login(this.email,this.password)
      .then(response => {
        console.log(response)
        window.alert("Ingreso exitoso");
      })
      .catch(error => {console.log(error)
      window.alert("Error\nIgrese bien los datos")});
  }

  looginGoogle(){
    this._heroes.loginGoogle()
    .then(response=>{
    this.router.navigate(['/home']);
    })
    .catch(error=>{
      window.alert("Error con el Login");
    })
  }
*/





}
//Interfaz
export interface Registro{
  codigo:number;
  fecha:string;
  cliente:string;
  tipo_Interacion:string;
  descripcion:string;
  }


  
