import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestDTO } from '../model/auth-request-dto';
import { JwtDTO } from '../model/jwt-dto';
import { UserDTO } from '../model/user-dto';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public new(userDTO: UserDTO): Observable<any> {
    return this.httpClient.post<any>(this.authURL+'register', userDTO);
  }
  public login(auth: AuthRequestDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL+'login', auth);
  }
}
