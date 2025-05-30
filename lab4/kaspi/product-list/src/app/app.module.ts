import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './page/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,NewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
