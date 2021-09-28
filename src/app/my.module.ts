
import { ChirpComponent } from './chirp/chirp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SubjectcompComponent } from './subjectcomp/subjectcomp.component';

@NgModule({
  declarations: [
    ChirpComponent,
    SubjectcompComponent
  
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  
  ],

  exports: [
    ChirpComponent
 
  ]

})
export class myModule { 
 
}
