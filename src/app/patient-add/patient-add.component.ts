import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Patient} from '../Patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})

export class PatientAddComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {
  }

  addPatient(patient: Patient) {
    this.patientService.addPatient(patient).subscribe();
    this.getPatients();
    this.router.navigate(['api/patients']);
  }

  getPatients(): void {
    this.patientService.list().subscribe(
      patients => {
        this.patients = patients;
      },
      err => console.error(err),
      () => console.log('done loading patients'));
  }
}
