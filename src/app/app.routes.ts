import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { AgenceComponent } from './component/agence/agence.component';
import { SousAgenceComponent } from './component/sous-agence/sous-agence.component';
import { VoyageComponent } from './component/voyage/voyage.component';
import { ReservationComponent } from './component/reservation/reservation.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'utilisateurs', component: UtilisateurComponent },
    { path: 'agence', component: AgenceComponent },
    { path: 'sous_agence', component: SousAgenceComponent },
    { path: 'voyage', component: VoyageComponent },
    { path: 'reservation', component: ReservationComponent },
];
