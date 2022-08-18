import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-name-person',
  templateUrl: './edit-name-person.component.html',
  styleUrls: ['./edit-name-person.component.css']
})
export class EditNamePersonComponent implements OnInit {
  person: PersonEntity = null;
  constructor(private personService: PersonService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.personService.detail(id).subscribe(
      {
      next: data =>{
        this.person = data;
      }, error: err =>{
        alert("Error al modificar datos");
        this.router.navigate(['']);
      }
    })
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personService.update(id, this.person).subscribe(
      data => {
        alert('¡Modificado con éxito!')
        this.router.navigate(['']);
      }
    )
  }
  cancel(){
    this.router.navigate([''])
  }


}
