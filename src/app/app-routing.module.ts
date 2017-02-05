import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, SubcategoryComponent, ProductComponent } from './index';



const routes:Routes = [
    {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
    },
    {
        path: 'category',
        component: AppComponent
    },
    {
        path: 'category/:name',
        component: SubcategoryComponent,
        children: [
            {
                path: ':subname',
                component: ProductComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
