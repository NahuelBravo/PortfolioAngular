import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SoftSkillsComponent } from './components/skills/soft-skills/soft-skills.component';
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component';
import { BotonLoginLogoutComponent } from './components/header/boton-login-logout/boton-login-logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoArgProgComponent } from './components/header/logo-arg-prog/logo-arg-prog.component';
import { SocialMediaComponent } from './components/header/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    SoftSkillsComponent,
    HardSkillsComponent,
    BotonLoginLogoutComponent,
    LogoArgProgComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
