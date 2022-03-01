import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigInComponent } from './components/sig-in/sig-in.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';


const routes: Routes = [
  {path: 'SigIn', component: SigInComponent},
  {path: 'Education', component: EducationComponent},
  {path: 'Expeience', component: ExperienceComponent},
  {path: 'Skills', component: SkillsComponent},
  {path: 'Proyects', component: ProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

