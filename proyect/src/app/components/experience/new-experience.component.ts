import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkExperienceEntity } from 'src/app/model/WorkExperienceEntity';
import { WorkExperienceService } from 'src/app/service/work-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nameExperience: string = "";
  description: string  = "";
  year: number;
  imageUrl: string = "";
  constructor(private experienceService:WorkExperienceService, private router: Router) { }

  ngOnInit(): void {
    

  }
  onCreate(){
    const work = new WorkExperienceEntity(this.nameExperience, this.year, this.description, this.imageUrl);
    this.experienceService.saveWork(work).subscribe(
      {
      next: data => {
        alert("Experiencia guardada");
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
