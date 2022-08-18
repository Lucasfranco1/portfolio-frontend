import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/model/SkillEntity';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {    
  skills: Skill[];
  skill:Skill=new Skill("",0,"");
  @Input()
  percent: number;
  imageSrc:String;
  title:String;

  
  constructor(private SkillService: SkillService, private token: TokenService) { }
  
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.isLogged = this.token.isLogged();
    this.getSkill();
    this.isAdmin = this.token.isAdmin();     
  }

  private getSkill(){
    this.SkillService.getSkills().subscribe(e=>{
      this.skills = e;             
    })
  }

  delete(id?: string){
    if(id != undefined){
      let option = confirm("¿Seguro que quieres eliminar esta skill?");
      if(option == true){
        this.SkillService.deleteSkill(id).subscribe(
          {
            next: data => {
            this.getSkill();
            alert('¡Skill eliminada con éxito!')
          }, error: err =>{
            alert("Error al borrar skill");
          }
      })
      }       
        this.getSkill();            
    }
  }
  

}
