import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './product/products.service';
import { ProductComponent } from './product/product.component';
// import { ProductService } from './products/service/product.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HomeComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,
    CommonModule,
    RouterModule,
    HeaderComponent,
    IonicModule.forRoot({}),
    ProductComponent,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
