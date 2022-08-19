import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/ProjectEntity';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.projectUrl;
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.url);
  }

  public saveProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.url + '/create', project);
  }
  public detailProject(id: string): Observable<Project>{
    return this.http.get<Project>(this.url + `/detail/${id}`);
  } 

  public updateProject(id: string, project: Project): Observable<Project>{
    return this.http.put<Project>(this.url + `/update/${id}`, project);
  }

  public deleteProject(id: string): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

}
