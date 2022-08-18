import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/ProjectEntity';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project = null;
  constructor(private projectService: ProjectService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.projectService.detailProject(id).subscribe(
      {
      next: data =>{
        this.project = data;
      }, error: err =>{
        alert("Error al modificar project");
        this.router.navigate(['']);
      }
    })
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.projectService.updateProject(id, this.project).subscribe(
      data => {
        alert('Proyecto modificado con éxito!');
        this.router.navigate(['']);
      }
    )
  }
  cancel(){
    this.router.navigate([''])
  }


}
