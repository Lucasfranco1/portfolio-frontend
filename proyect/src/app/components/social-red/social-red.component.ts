import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social-red',
  templateUrl: './social-red.component.html',
  styleUrls: ['./social-red.component.css']
})
export class SocialRedComponent implements OnInit {
  @HostBinding('class.navbar-opened') navbarOpened = false;
  isLogged = false;
  person: PersonEntity=new PersonEntity();
  constructor(private router:Router, private personService: PersonService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.getPerson();
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
        
  }

  login(){
    this.router.navigate(['/login']);
  }
  private getPerson(){
    this.personService.getPerson().subscribe(
      data => {this.person = data;
      });
    }

}
