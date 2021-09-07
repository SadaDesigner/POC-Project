import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { ChirpComponent } from './chirp/chirp.component';
import { PostDetailsComponent } from './dashboard/post-details/post-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'settings', component: SettingsComponent},
  {path : 'admin', component: AdminComponent},
  {path : 'admin/:title', component: AdminComponent},
  {path : 'chirp', component: ChirpComponent},
  {path : 'dashboard/postdetails/:id', component: PostDetailsComponent},
  {path:  'not-found', component: NotfoundComponent },
  {path:  '**', redirectTo: 'not-found'}
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


