import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  person: PersonEntity = null;
  constructor(private personService: PersonService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.personService.detail(id).subscribe(
      {
      next: data =>{
        this.person = data;
      }, error: err =>{
        alert("Error al modificar educación");
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
