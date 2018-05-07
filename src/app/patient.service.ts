import {Injectable} from '@angular/core';
import {Patient} from './Patient';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Comments} from "./Comments";

@Injectable()
export class PatientService {

  private readonly URL = '/api/patients';
  private readonly COMMENTS = '/api/comments';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Patient[]> {
    return this.http.get<Array<Patient>>(this.URL);
  }

  public getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.URL}/${id}`);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.URL, patient);
  }

  public updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.URL}/${patient.id}`, patient);
  }

  public delete(patient: Patient): Observable<Patient> {
    return this.http.delete<Patient>(`${this.URL}/${patient.id}`);
  }

  getComments(id: number): Observable<Comments[]> {
    return this.http.get<Array<Comments>>(`${this.COMMENTS}/${id}`);
  }

  addComment(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.COMMENTS, comment);
  }
}
