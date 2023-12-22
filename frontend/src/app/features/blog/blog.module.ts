import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpostComponent } from './newpost/newpost.component';
import { SettingComponent } from './setting/setting.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'newpost', component: NewpostComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingComponent },
];

@NgModule({
  declarations: [
    NewpostComponent,
    SettingComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class BlogModule { }
