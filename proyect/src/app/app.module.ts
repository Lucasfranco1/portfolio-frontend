import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialRedComponent } from './components/social-red/social-red.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditNamePersonComponent } from './components/about/edit-name-person.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewProjectComponent } from './components/proyects/new-project.component';
import { EditProjectComponent } from './components/proyects/edit-project.component';
import { EditPhotoPerfilComponent } from './components/about/edit-photo-perfil.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditFooterComponent } from './components/footer/edit-footer.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

//HttpClient
import { HttpClientModule } from '@angular/common/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MathSnackForm



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Interceptor
import { interceptorProvider } from './service/interceptors/prod-interceptor.service';

import { EditRedSocialComponent } from './components/social-red/edit-red-social.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialRedComponent,
    BannerComponent,    
    AboutComponent, 
    ExperienceComponent, 
    EducationComponent, 
    SkillsComponent, 
    ProyectsComponent, 
    FooterComponent, 
    HomeComponent, 
    LoginComponent, 
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent, 
    EditAboutComponent, 
    EditNamePersonComponent, 
    NewSkillComponent, 
    EditSkillComponent, 
    NewProjectComponent, 
    EditProjectComponent, 
    EditPhotoPerfilComponent, 
    EditBannerComponent, 
    EditFooterComponent, EditRedSocialComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,            
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
