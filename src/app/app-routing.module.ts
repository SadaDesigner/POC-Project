import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { ChirpComponent } from './chirp/chirp.component';
import { PostDetailsComponent } from './dashboard/post-details/post-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent, data:{name:' sadashiv', age: 32}},
  {path : 'settings', component: SettingsComponent, data: {name: 'sadashiv', role:'ui developer'}},
  {path : 'admin', component: AdminComponent},
  {path : 'admin/:title', component: AdminComponent}, 
  {path : 'chirp', component: ChirpComponent},
  {path : 'dashboard/postdetails/:id', component: PostDetailsComponent},
  {path:  'not-found', component: NotfoundComponent },
  {path: 'template-form', component: TemplateformComponent},
  {path:  '**', redirectTo: 'not-found'}
 
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


