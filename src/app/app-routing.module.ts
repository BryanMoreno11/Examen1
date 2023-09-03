import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'registro',component:RegistroComponent},
{path:'modificar/:id',component:ModificarComponent},
{path:'login',component:LoginComponent},

{path:"**", pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
