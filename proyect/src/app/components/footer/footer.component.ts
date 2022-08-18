import { Component, OnInit } from '@angular/core';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  person: PersonEntity=new PersonEntity();
  
  constructor(private personService: PersonService,  private token: TokenService) { }

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
