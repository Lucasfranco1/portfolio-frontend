import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperienceEntity } from '../model/WorkExperienceEntity';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  url = environment.experienceUrl;
  constructor(private http: HttpClient) { }

  public getAllWork(): Observable<WorkExperienceEntity[]>{
    return this.http.get<WorkExperienceEntity[]>(this.url+'/allProfile');
  }

  public saveWork(workExperienceEntity: WorkExperienceEntity): Observable<WorkExperienceEntity>{
    return this.http.post<WorkExperienceEntity>(this.url + '/create', workExperienceEntity);
  }
  public detail(id: string): Observable<WorkExperienceEntity>{
    return this.http.get<WorkExperienceEntity>(this.url + `/detail/${id}`);
  } 

  public update (id: string, workExperienceEntity: WorkExperienceEntity): Observable<WorkExperienceEntity>{
    return this.http.put<WorkExperienceEntity>(this.url + `/update/${id}`, workExperienceEntity);
  }

  public delete (id: string): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }


}
