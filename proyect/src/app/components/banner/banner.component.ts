import { Component, OnInit } from '@angular/core';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  person: PersonEntity=new PersonEntity();
  constructor(public personService: PersonService, private token: TokenService) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.isLogged = this.token.isLogged();
    this.getPerson();
    this.isAdmin = this.token.isAdmin();     
  
    
  }
  private getPerson(){
    this.personService.getPerson().subscribe(
      data => {this.person = data;
      });
    }
}
