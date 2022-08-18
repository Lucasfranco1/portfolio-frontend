import { Component, OnInit } from '@angular/core';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  isAdmin = false;
  person: PersonEntity = new PersonEntity(); 

  constructor(private personService: PersonService,  private token: TokenService) { }

  isLogged = false;

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

