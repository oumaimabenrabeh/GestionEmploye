import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeListComponent },
  { path: 'add', component: CreateEmployeComponent },
  { path: 'update/:id', component: UpdateEmployeComponent },
  { path: 'details/:id', component: EmployeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
