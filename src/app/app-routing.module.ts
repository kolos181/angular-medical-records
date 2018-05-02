import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientsComponent} from './patients/patients.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {RouterModule, Routes } from '@angular/router';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientAddComponent} from './patient-add/patient-add.component';

const routes: Routes = [
  // { path: '', redirectTo: '/api/patients', pathMatch: 'full' },
  { path: 'api/patients', component: PatientsComponent },
  { path: 'api/getPatient/:id', component: PatientDetailComponent},
  {path: 'api/editPatient/:id', component: PatientEditComponent},
  {path: 'api/createPatient', component: PatientAddComponent},
  {path: 'api/deletePatient/:id', component: PatientAddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
