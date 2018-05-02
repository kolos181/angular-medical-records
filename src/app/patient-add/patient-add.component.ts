import {Component, OnInit} from '@angular/core';
import {Patient} from '../Patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})

export class PatientAddComponent implements OnInit {

  constructor(private patientsService: PatientService) {
  }

  ngOnInit() {
  }

  addPatient(patient: Patient): void {
    // patient.date = new Date(patient.date).getTime();
    console.log(new Date(patient.date).getTime());
    this.patientsService.addPatient(patient);
  }

}
