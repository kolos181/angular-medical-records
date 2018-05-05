import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PatientService} from '../patient.service';
import {Patient} from '../Patient';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patient: Patient;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
  }

  deletePatient(patient: Patient): void {
    this.patientService.delete(patient).subscribe();
}
  editPatient(patient: Patient): void {
    this.patientService.updatePatient(this.patient).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
