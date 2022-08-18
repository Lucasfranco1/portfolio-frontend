import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditNamePersonComponent } from './components/about/edit-name-person.component';
import { EditPhotoPerfilComponent } from './components/about/edit-photo-perfil.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditFooterComponent } from './components/footer/edit-footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/proyects/edit-project.component';
import { NewProjectComponent } from './components/proyects/new-project.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditRedSocialComponent } from './components/social-red/edit-red-social.component';
import { GuardService } from './service/guards/guard.service';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'new_experience', component: NewExperienceComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_experience/:id', component: EditExperienceComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'new_education', component: NewEducationComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_education/:id', component: EditEducationComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_about_me/:id', component: EditAboutComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_namePerson/:id', component:EditNamePersonComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'new_skill', component:NewSkillComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_skill/:id', component:EditSkillComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'new_project', component:NewProjectComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_project/:id', component:EditProjectComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_photo/:id', component:EditPhotoPerfilComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_banner/:id', component: EditBannerComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_footer/:id', component: EditFooterComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }},
  {path:'edit_social-red/:id', component: EditRedSocialComponent, canActivate: [GuardService],  data: { expectedRol: ['admin'] }}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
