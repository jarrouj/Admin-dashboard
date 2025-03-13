import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './middleware/auth.guard';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path : '' , redirectTo : '/login' , pathMatch : 'full'
  },
  {
    path : 'login' ,component : LoginComponent
  },
  {
    path : 'products' , component : ProductComponent, canActivate : [AuthGuard]
  },
  {
    path : 'home' , component : HomeComponent , canActivate : [AuthGuard]
  },
  {
    path : 'orders' , component : OrderComponent , canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
