import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonEntity } from 'src/app/model/PersonEntity.model';
import { ImageEntity } from 'src/app/model/UploadEntity';
import { ImageServiceService } from 'src/app/service/image-service.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-photo-perfil',
  templateUrl: './edit-photo-perfil.component.html',
  styleUrls: ['./edit-photo-perfil.component.css']
})
export class EditPhotoPerfilComponent implements OnInit {

  person: PersonEntity = null;

  @ViewChild('imagesInputFile', {static: false}) imagesFile: ElementRef;

  images: File;
  imagesMin: File;

  imagesEntity: ImageEntity = null;
  
  constructor(
    private imagesService: ImageServiceService,
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
        alert("Error al modificar foto de perfil");
        this.router.navigate(['']);
      }
    })
  }

  onFileChange(event: any) {
    this.images = event.target.files[0];
    const fileReader= new FileReader();
    fileReader.onload = (evento: any) => {
      this.imagesMin = evento.target.result;
    };
    fileReader.readAsDataURL(this.images);
  }

  onUpload(): void {
    
    this.imagesService.upload(this.images).subscribe(
      {
      next: data => {        
        this.router.navigate(['/']);
      },
      error: err => {
        alert(err.error.mensaje);        
        this.reset();
      }
    });
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personService.updateImage(id, this.images).subscribe(
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
    this.router.navigate([''])
  }
 

}
