import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';


const routes: Routes = [
  {path: '', redirectTo: '/Education', pathMatch: 'full'},
  {path: 'Education', component: EducationComponent},
<<<<<<< HEAD
  {path: 'Experience', component: ExperienceComponent},
=======
  {path: 'Expeience', component: ExperienceComponent},
>>>>>>> 8f45583179a782016f301b1a919fac4a5c80ccf0
  {path: 'Skills', component: SkillsComponent},
  {path: 'Proyects', component: ProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

