import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkExperienceEntity } from 'src/app/model/WorkExperienceEntity';
import { WorkExperienceService } from 'src/app/service/work-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experience: WorkExperienceEntity = null;

  constructor(private experienceService: WorkExperienceService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.experienceService.detail(id).subscribe(
      {
      next: data =>{
        this.experience = data;
      }, error: err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(
      data => {
        alert('¡Experiencia laboral modificada de manera exitosa!');
        this.router.navigate(['']);
      }
    )
  }
  cancel(){
    this.router.navigate([''])
  }
}
