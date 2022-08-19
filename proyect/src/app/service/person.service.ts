import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonEntity } from '../model/PersonEntity.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = environment.personUrl;
  constructor(private http: HttpClient) { }

  getPerson(): Observable<PersonEntity>{
    return this.http.get<PersonEntity>(this.url);
  }
  getData() {
    return this.http.get(this.url);
  }

  public save(PersonEntity: PersonEntity): Observable<PersonEntity>{
    return this.http.post<PersonEntity>(this.url + '/create', PersonEntity);
  }
  public detail(id: string): Observable<PersonEntity>{
    return this.http.get<PersonEntity>(this.url + `/detail/${id}`);
  } 

  public update (id: string, PersonEntity: PersonEntity): Observable<PersonEntity>{
    return this.http.put<PersonEntity>(this.url + `/update/${id}`, PersonEntity);
  }

  public updateImage(id: string, image: File):Observable<any>{
    const fromData = new FormData();
    fromData.append('file', image);
    return this.http.put<any>(this.url+`/updatePhoto/${id}`, fromData);
  }
  public updateBanner(id: string, image: File):Observable<any>{
    const fromData = new FormData();
    fromData.append('file', image);
    return this.http.put<any>(this.url+`/updateBanner/${id}`, fromData);
  }
  public updateCV(id: string, image: File):Observable<any>{
    const fromData = new FormData();
    fromData.append('file', image);
    return this.http.put<any>(this.url+`/updateCv/${id}`, fromData);
  }

  public delete (id: string): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

}
