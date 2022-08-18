import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/ProjectEntity';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  newNameProject: string = "";
  newDescriptionProject: string = "";    
  newUrlProject: string = "";
  newImageProject: string = "";       
    
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(){
    const project = new Project(this.newNameProject, this.newDescriptionProject, this.newUrlProject, this.newImageProject);
    this.projectService.saveProject(project).subscribe(
      {
      next: data => {
        alert("Proyecto guardado");
        this.router.navigate(['']);
    }, error: err => {
      alert("Falló");
      this.router.navigate([''])
    }
  })
  }
  cancel(){
    this.router.navigate([''])
  }

}
