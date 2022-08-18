import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequestDTO } from 'src/app/model/auth-request-dto';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUser: AuthRequestDTO;    
 


  loginForm = new FormGroup({
    nameUser: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])

  });

  errMessage: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router  ) { 
      
    }

  ngOnInit(): void {
   
  }

  

  onLogin(): void {         
      this.authService.login(this.loginForm.value).subscribe({
        next: data => {      
          this.tokenService.setToken(data.token);       
          this.router.navigate(['/']);
        },
        error: err => {        
          this.errMessage = err.ParamBadRequest;        
          console.log(this.errMessage);                               
          alert("Usuario o contraseña incorrectos.");          
        }
      }
      )
    }       
    
  }


  


