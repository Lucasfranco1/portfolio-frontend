import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/SkillEntity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = environment.skillUrl;
  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url);
  }
  public saveSkill(skill: Skill): Observable<Skill>{
    return this.http.post<Skill>(this.url + '/create', skill);
  }
  public detailSkill(id: string): Observable<Skill>{
    return this.http.get<Skill>(this.url + `/detail/${id}`);
  } 

  public updateSkill (id: string, skill: Skill): Observable<Skill>{
    return this.http.put<Skill>(this.url + `/update/${id}`, skill);
  }

  public deleteSkill (id: string): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }
}
