import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/Education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nameEducation: string = "";
  description: string  = "";
  year: number;
  imageUrl: string = "";
  constructor(private educationService: EducationService, private router: Router ) { }

  ngOnInit(): void {
  }
  onCreate(){
    const education = new Education(this.nameEducation, this.year, this.description, this.imageUrl);
    this.educationService.saveEducation(education).subscribe(
    {
        next: data => {
        alert("Educación guardada");
        this.router.navigate([''])
     }, error: err =>{
        alert("Falló");
        this.router.navigate([''])
     }           
    })
  }
  cancel(){
    this.router.navigate([''])
  }

}
