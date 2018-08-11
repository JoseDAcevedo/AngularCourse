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
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//GUARD
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            {path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
            {path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajusted del tema' } },
            //Principal
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de progreso' } },
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS' } },
            //Mantenimiento
            {path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento - Usuarios'}},
            {path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento - Hospitales'}},
            {path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento - Médicos'}},
            {path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar Médico'}},
            {path: '', redirectTo: '/home', pathMatch: 'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);