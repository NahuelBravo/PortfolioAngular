import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

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
import { LogoArgProgComponent } from './components/header/logo-arg-prog/logo-arg-prog.component';
import { SocialMediaComponent } from './components/header/social-media/social-media.component';
import { CardComponent } from './components/education/card/card.component';
import { CardExpComponent } from './components/experience/card-exp/card-exp.component';
import { CardHardSkillComponent } from './components/skills/hard-skills/card-hard-skill/card-hard-skill.component';
import { CardSoftSkillComponent} from "./components/skills/soft-skills/card-soft-skill/card-soft-skill.component";
import { ImageProyectComponent } from './components/proyects/image-proyect/image-proyect.component';
import { InfoProyectComponent } from './components/proyects/info-proyect/info-proyect.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';

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

    CardComponent,
    CardExpComponent,
    CardHardSkillComponent,
    CardSoftSkillComponent,
    ImageProyectComponent,
    InfoProyectComponent,
    EditButtonComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
