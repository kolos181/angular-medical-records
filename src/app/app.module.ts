import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import {PatientService} from "./patient.service";
import { HttpClientModule } from '@angular/common/http';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientAddComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
