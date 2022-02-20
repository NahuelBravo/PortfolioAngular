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
import { ProfilePictureComponent } from './components/about/profile-picture/profile-picture.component';
import { NameJobComponent } from './components/about/name-job/name-job.component';
import { TextComponent } from './components/about/text/text.component';
import { LogoComponent } from './components/education/logo/logo.component';
import { InformationComponent } from './components/education/information/information.component';
import { InformationExpComponent } from './components/experience/information-exp/information-exp.component';
import { LogoExpComponent } from './components/experience/logo-exp/logo-exp.component';
import { CardComponent } from './components/education/card/card.component';
import { CardExpComponent } from './components/experience/card-exp/card-exp.component';
import { ButtonEditAboutComponent } from './components/about/button-edit-about/button-edit-about.component';
import { ButtonEditEducationComponent } from './components/education/button-edit-education/button-edit-education.component';
import { ButtonDeletedEducationComponent } from './components/education/button-deleted-education/button-deleted-education.component';
import { ButtonEditExperienceComponent } from './components/experience/button-edit-experience/button-edit-experience.component';
import { ButtonDeletedExperienceComponent } from './components/experience/button-deleted-experience/button-deleted-experience.component';

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
    SocialMediaComponent,
    ProfilePictureComponent,
    NameJobComponent,
    TextComponent,
    LogoComponent,
    InformationComponent,
    InformationExpComponent,
    LogoExpComponent,
    CardComponent,
    CardExpComponent,
    ButtonEditAboutComponent,
    ButtonEditEducationComponent,
    ButtonDeletedEducationComponent,
    ButtonEditExperienceComponent,
    ButtonDeletedExperienceComponent
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
