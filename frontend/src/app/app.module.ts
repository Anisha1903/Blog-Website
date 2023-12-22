import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselModule } from '@coreui/angular';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDialogComponent } from './shared/update-dialog/update-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    CarouselModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule ,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
