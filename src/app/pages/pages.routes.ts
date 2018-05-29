import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de progreso' } },
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS' } },
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajusted del tema' } },
            {path: '', redirectTo: '/home', pathMatch: 'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);