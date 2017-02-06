import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent, SubcategoryComponent, ProductComponent, InfoProductComponent, AdminComponent, Page404Component } from './index';



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
