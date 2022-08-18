import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/model/ProjectEntity';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {  
  projects: Project[] = [];
  
  constructor(private projectService:ProjectService, private token: TokenService) { }
  
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.isLogged = this.token.isLogged();
    this.allProject();
    this.isAdmin = this.token.isAdmin();     
  }
  private allProject(){
    this.projectService.getProjects().subscribe(e =>{
      this.projects=e;
    })
  }
  delete(id?: string){
    if(id != undefined){
      let option = confirm("¿Seguro que quieres eliminar este proyecto?");
      if(option == true){
        this.projectService.deleteProject(id).subscribe(
          {
            next: data => {
            this.allProject();
            alert('¡Proyecto eliminado con éxito!')
          }, error: err =>{
            alert("Error al borrar proyecto");
          }
      })
      }       
        this.allProject();            
    }
  }

}
