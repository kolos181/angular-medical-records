import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {PatientService} from '../patient.service';
import {Patient} from '../Patient';
import {Comments} from '../Comments';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patient: Patient;
  @Input() comments: Comments[];

  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
    this.patientService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }

  deletePatient(patient: Patient): void {
    this.patientService.delete(patient).subscribe();
  }

  editPatient(patient: Patient): void {
    this.patientService.updatePatient(patient).subscribe();
    this.goBack();
  }

  addComment(comment: string): void {
    const localComment = new Comments();
    localComment.patient = this.patient;
    localComment.comment = comment;
    this.patientService.addComment(localComment).subscribe();
    this.getPatient();
    this.router.navigate(['api/getPatient', this.patient.id]);
  }

  goBack(): void {
    this.location.back();
  }

}
