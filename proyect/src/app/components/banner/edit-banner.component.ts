import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  person: PersonEntity = null;

  @ViewChild('imagesInputFile', {static: false}) imagesFile: ElementRef;

  images: File;
  imagesMin: File;

  
  constructor(    
    private personService: PersonService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.personService.detail(id).subscribe(
      {
      next: data =>{
        this.person = data;
      }, error: err =>{
        alert("Error al modificar banner");
        this.router.navigate(['']);
      }
    })
  }

  onFileChange(event: any) {
    this.images = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagesMin = evento.target.result;
    };
    fr.readAsDataURL(this.images);
  }

 
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personService.updateBanner(id, this.images).subscribe(
      {
      next:data => {
        alert('¡Modificado con éxito!')
        this.router.navigate(['']);
      },
      error: err => {             
        this.reset();
        
      }
  });
  }
  reset(): void {
    this.images = null;
    this.imagesMin = null;
    this.imagesFile.nativeElement.value = '';
    this.router.navigate(['']);
  }

  cancel(){
    this.reset()
    this.router.navigate(['']);
  }


}
