import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';  
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from '../contact.service'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    ContactService,
  ]
})
export class ProfileModule { }
