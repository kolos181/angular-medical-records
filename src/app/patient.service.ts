import {Injectable, OnInit} from '@angular/core';
import {Patient} from './Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class PatientService {

  private readonly listUrl = '/api/patients';
  private readonly getOneUrl = '/api/getPatient';
  private readonly addOneUrl = '/api/addPatient';
  private readonly deleteOneUrl = '/api/deletePatient';
  // private readonly updateOneUrl = '/api/';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Patient[]> {
  return this.http.get<Array<Patient>>(this.listUrl);
}

  public getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.getOneUrl}/${id}`);
  }

  public addPatient(patient: Patient): Subscription {
  return this.http.post<Patient>(this.addOneUrl, patient).subscribe();
}

  public delete(patient: Patient): Observable<Patient> {
    return this.http.delete<Patient>(`${this.deleteOneUrl}/${patient.id}`);
  }

}
