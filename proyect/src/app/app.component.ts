import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit {

  load = false;
  
  ngOnInit(): void {     
    if(this.load == false){
      setTimeout(() => {          
        this.load = true;       
      }, 4000);      
    }                
    
  }
  
  title = 'proyect';
}
