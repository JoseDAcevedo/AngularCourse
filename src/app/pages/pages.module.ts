import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

//Modulos a implementar
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'; //ng2-charts

//Componente principal
import { PagesComponent } from './pages.component';

//Componentes de contenido
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//temporal
import { IncrementComponent } from '../components/increment/increment.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        GraficodonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        HomeComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}