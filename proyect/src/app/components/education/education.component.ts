import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/Education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  
  constructor(private EducationService: EducationService, private token: TokenService) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {

    this.isLogged = this.token.isLogged();
    this.allEducation(); 
    this.isAdmin = this.token.isAdmin();  
   
  }
  private allEducation(){
    this.EducationService.getEducation().subscribe(e =>{
      this.educations = e;
    })
  }

  delete(id?: string){
    if(id != undefined){
      let option = confirm("¿Seguro que quieres eliminar esta información educacional?");
      if(option == true){
      this.EducationService.deleteEducation(id).subscribe(
        {
        next: data => {
          this.allEducation();
          alert('¡Educación eliminada con éxito!');
        }, error: err =>{
          alert("Error al borrar education");
        }
      })
    } 
    this.allEducation();
  }
  }


}
