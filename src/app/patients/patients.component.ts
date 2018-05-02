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

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  patients: Observable<Patient[]>;
  birthDate: string;

  constructor(private patientService: PatientService) {
    // this.date = this.patient.date.getDate() + ' ' + this.months[this.patient.date.getMonth()] + ', ' +
    //   '' + this.patient.date.getFullYear();
  }

  getPatients(): void {
    this.patients = this.patientService.list();
  }

  deletePatient(patient: Patient): void {
    this.patientService.delete(patient).subscribe();
  }

  ngOnInit() {
    this.getPatients();
  }

}
