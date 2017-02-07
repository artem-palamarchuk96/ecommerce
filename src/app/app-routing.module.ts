import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent, SubcategoryComponent, ProductComponent, InfoProductComponent, AdminComponent, Page404Component, SearchResultsComponent, CartComponent } from './index';



const routes:Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
    },
    {
        path: 'shop',
        component: CategoryComponent,
        children: [
            {
                path: 'category/:name',
                component: SubcategoryComponent,
                children: [
                    {
                        path: ':subname',
                        component: ProductComponent
                    }
                ]
            },
            {
                path: 'product/:articul',
                component: InfoProductComponent
            },
            {
                path: 'search',
                component: SearchResultsComponent
            },
            {
                path: 'cart',
                component: CartComponent
            }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '**',
        component: Page404Component
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
