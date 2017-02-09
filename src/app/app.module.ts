import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin/admin.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { Page404Component } from './page-404/page-404.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SubcategoryComponent,
        ProductComponent,
        CategoryComponent,
        AdminComponent,
        InfoProductComponent,
        Page404Component,
        SearchResultsComponent,
        CartComponent,
        HeaderComponent,
        FiltersComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
