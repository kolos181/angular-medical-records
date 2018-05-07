import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PatientService} from '../patient.service';
import {Patient} from '../Patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})

export class PatientEditComponent implements OnInit {

  @Input() patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) {
  }

  ngOnInit() {
    this.getPatient();
  }

  editPatient(patient: Patient): void {
    console.log(patient);
    // adding id from injected patient, since we don't specify id in edit form
    patient.id = this.patient.id;
    this.patientService.updatePatient(patient).subscribe();
    this.router.navigate(["api/getPatient", patient.id]);
  }

  private getPatient() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
  }

}
