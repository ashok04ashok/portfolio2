import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { QulificationComponent } from './qulification/qulification.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  
  { path: "", component:LandingComponent },
  // { path: "", component:LandingComponent },
  { path: "home", component:HomeComponent },
  { path: "profile", component:ProfileComponent },
  { path: "about", component:AboutComponent },
  { path: "skill", component:SkillsComponent },
  { path: "contacts", component:ContactsComponent },
  { path: "events", component:EventsComponent },
  { path: "footer", component:FooterComponent },
  { path: "qualification", component:QulificationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
