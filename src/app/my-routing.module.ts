
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChirpComponent } from './chirp/chirp.component';


const routes: Routes = [

  {path : 'chirp', component: ChirpComponent}
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class myRoutingModule { }


