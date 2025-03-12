import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './middleware/auth.guard';

const routes: Routes = [
  {
    path : '' , redirectTo : '/login' , pathMatch : 'full'
  },
  {
    path : 'login' ,component : LoginComponent
  },
  {
    path : 'products' , component : ProductsComponent, canActivate : [AuthGuard]
  },
  {
    path : 'home' , component : HomeComponent , canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
