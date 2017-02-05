import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DataService} from "./services/data.service";
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin/admin.component';
import { InfoProductComponent } from './info-product/info-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcategoryComponent,
    ProductComponent,
    CategoryComponent,
    AdminComponent,
    InfoProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
