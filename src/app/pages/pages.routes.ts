import { RouterModule, Routes } from '@angular/router';

//Componentes principales
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

//Principal
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

//Mantenimiento
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';

//Perfil
import { ProfileComponent } from './profile/profile.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//GUARDS
import { AdminGuard } from '../services/service.index';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';


const pagesRoutes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [VerificaTokenGuard],
        data: { titulo: 'Inicio' } 
    },
    { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajusted del tema' } },
    //Principal
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de progreso' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS' } },
    //

    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AdminGuard],
        data: { titulo: 'Mantenimiento - Usuarios' }
    },

    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento - Hospitales' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento - Médicos' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);