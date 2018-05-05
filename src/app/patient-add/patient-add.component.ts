import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {Patient} from '../Patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})

export class PatientAddComponent implements OnInit {

  constructor(private patientService: PatientService, private location: Location) {
  }

  ngOnInit() {
  }

  addPatient(patient: Patient): void {
    this.patientService.addPatient(patient);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
