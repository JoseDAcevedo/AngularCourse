import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

//Modulos a implementar
import { SharedModule } from '../shared/shared.module';

//Componente principal
import { PagesComponent } from './pages.component';

//Componentes de contenido
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        HomeComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}