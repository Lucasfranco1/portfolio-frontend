import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/SkillEntity';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(private skillService: SkillService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.skillService.detailSkill(id).subscribe(
      {
      next: data =>{
        this.skill = data;
      }, error: err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    })
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(
      data => {
        alert('Modificada Skill con éxito!');
        this.router.navigate(['']);
      }
    )
  }
  cancel(){
    this.router.navigate([''])
  }
}
