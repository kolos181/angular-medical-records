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

  public addPatient(patient: Patient): Subscription {
    return this.http.post<Patient>(this.URL, patient).subscribe();
  }

  public updatePatient(patient: Patient): Subscription {
    return this.http.put<Patient>(`${this.URL}/${patient.id}`, patient).subscribe();
  }

  public delete(patient: Patient): Observable<Patient> {
    return this.http.delete<Patient>(`${this.URL}/${patient.id}`);
  }

  getComments(id: number) {
    return this.http.get<Array<Comments>>(`${this.COMMENTS}/${id}`);
  }

  addComment(comment: Comments): Subscription {
    return this.http.post<Comments>(this.COMMENTS, comment).subscribe();
  }
}
