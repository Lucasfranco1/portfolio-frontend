import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/Education';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = environment.educationUrl;
  constructor(private http: HttpClient) { }

  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.url);
  }

  public saveEducation(education: Education): Observable<Education>{
    return this.http.post<Education>(this.url + '/create', education);
  }
  public detailEducation(id: string): Observable<Education>{
    return this.http.get<Education>(this.url + `/detail/${id}`);
  } 

  public updateEducation (id: string, education: Education): Observable<Education>{
    return this.http.put<Education>(this.url + `/update/${id}`, education);
  }

  public deleteEducation (id: string): Observable<any>{
    return this.http.delete<any>(this.url + `/delete_education/${id}`);
  }
}

