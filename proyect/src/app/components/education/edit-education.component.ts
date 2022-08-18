import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/Education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;

  constructor(private educationService: EducationService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.educationService.detailEducation(id).subscribe(
      {
      next: data =>{
        this.education = data;
      }, error: err =>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educationService.updateEducation(id, this.education).subscribe(
      {
       next: data => {
        alert('Educación editada con éxito');
        this.router.navigate(['']);
      }, error: err =>{
        alert('Error al editar educación');
      }
      
    })
  }
  cancel(){
    this.router.navigate([''])
  }

}
