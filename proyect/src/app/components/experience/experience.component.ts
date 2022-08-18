import { Component, OnInit } from '@angular/core';
import { WorkExperienceEntity } from 'src/app/model/WorkExperienceEntity';
import { TokenService } from 'src/app/service/token.service';
import { WorkExperienceService } from 'src/app/service/work-experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExperiences: WorkExperienceEntity[] = [];
  constructor(private workExperienceService:WorkExperienceService, private token: TokenService) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.isLogged = this.token.isLogged();
    this.allExperience();
    this.isAdmin = this.token.isAdmin();             
  }

  private allExperience(){
    this.workExperienceService.getAllWork().subscribe(e =>{
      this.workExperiences = e;
    })
  }

  delete(id?: string){
    if(id != undefined){
      let option = confirm("¿Seguro que quieres eliminar esta experiencia laboral?");
      if(option == true){
        this.workExperienceService.delete(id).subscribe(
          {
            next: data => {
            this.allExperience();
            alert('¡Experiencia laboral eliminada con éxito!')
          }, error: err =>{
            alert("Error al borrar experiencia");
          }
      })
      }       
        this.allExperience();            
    }
  }

  

}
