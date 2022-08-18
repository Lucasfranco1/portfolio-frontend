import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/SkillEntity';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  skill: string = "";
  percentage: number  = 0;  
  imageUrl: string = "";
  constructor(private skillService: SkillService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate(){
    const skills = new Skill(this.skill, this.percentage, this.imageUrl);
    this.skillService.saveSkill(skills).subscribe(
      {
      next: data => {
        alert("Skill guardada");
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
