import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'settings', component: SettingsComponent},
  {path : 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
