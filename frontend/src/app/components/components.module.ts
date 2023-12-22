import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
];

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ComponentsModule { }
