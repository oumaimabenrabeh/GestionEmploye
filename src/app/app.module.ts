import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeComponent,
    EmployeDetailComponent,
    EmployeListComponent,
    UpdateEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
