import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageEntity } from '../model/UploadEntity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  imageURL = environment.imageUrl;
  constructor(private httpClient: HttpClient) { }

  public list():Observable<ImageEntity[]>{
    return this.httpClient.get<ImageEntity[]>(this.imageURL+"list");
  }
  public upload(image: File):Observable<any>{
    const fromData = new FormData();
    fromData.append('file', image);
    return this.httpClient.post<any>(this.imageURL+'upload', fromData);
  }

  public update(id: string, image: File):Observable<any>{
    const fromData = new FormData();
    fromData.append('file', image);
    return this.httpClient.put<any>(this.imageURL+`update/${id}`, fromData);
  }

  public delete(id: string):Observable<any>{
    return this.httpClient.delete<any>(this.imageURL+`delete/${id}`)
  }
}
