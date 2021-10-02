import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { SadaDirectiveDirective } from './sada-directive.directive';
import { PostDetailsComponent } from './dashboard/post-details/post-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CpipeComponent } from './cpipe/cpipe.component';
import { myCustomPipe } from './cpipe/custompipe.pipe';
import { myCustomFilterPipe } from './cpipe/filter.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
// import { IntercepterService } from './intercepterservice.service';
import { myModule } from './my.module';
import { myGuard } from './guards/myguard.service';
import { TruncatePipe } from './cpipe/truncate.pipe';
import { gridFilter } from './cpipe/gridfilter.pipe';
import { CrudComponent } from './crud/crud.component';
import { EmployeeComponent } from './crud/employee/employee.component';
import { CrudserviceService } from './crudservice.service';
import { filterPipe } from './crud/filterpipe.pipe.'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SettingsComponent,
    AdminComponent,
    SadaDirectiveDirective,
    PostDetailsComponent,
    NotfoundComponent,
    CpipeComponent,
    myCustomPipe,
    myCustomFilterPipe,
    TemplateformComponent,
    TruncatePipe,
    gridFilter,
    CrudComponent,
    EmployeeComponent,
    filterPipe
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    myModule
    
  ],
  // {provide: HTTP_INTERCEPTORS, useClass: IntercepterService,  multi: true}, 
  providers: [myGuard, CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  isFluid:boolean = true;

  
}
