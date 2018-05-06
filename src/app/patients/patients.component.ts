import {Component, Injectable, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {Patient} from '../Patient';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  // template: `[code goes here]`,
  styleUrls: ['./patients.component.css']
})
@Injectable()
export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) {
  }

  getPatients(): void {
    this.patientService.list().subscribe(
      patients => {
        this.patients = patients;
      },
      err => console.error(err),
      () => console.log('done loading patients'));
  }


  deletePatient(patient: Patient): void {
    this.patients = this.patients.filter(p => p !== patient);
    this.patientService.delete(patient).subscribe();
  }

  ngOnInit() {
    this.getPatients();
  }

}
