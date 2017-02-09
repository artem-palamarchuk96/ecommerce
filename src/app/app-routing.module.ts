import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent, SubcategoryComponent, ProductComponent, InfoProductComponent, AdminComponent, Page404Component, SearchResultsComponent, CartComponent } from './index';


const routes:Routes = [
        {
            path: '',
            redirectTo: 'catalog/list',
            pathMatch: 'full'
        },
        {
            path: 'catalog/list',
            component: CategoryComponent
        },
        {
            path: 'catalog/list/:category',
            component: CategoryComponent
        },
        {
            path: 'catalog/list/:category/:subcategory',
            component: CategoryComponent
        },
        //{
        //    path: 'catalog/list/category/:category/sub/:subcategory/:articul',
        //    component: CategoryComponent
        //},
        {
            path: 'catalog/search',
            component: SearchResultsComponent
        },
        {
            path: 'catalog/cart',
            component: CartComponent
        },
        {
            path: 'admin',
            component: AdminComponent
        },
        {
            path: '**',
            redirectTo: 'catalog/list'
        }

    ]
    ;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
