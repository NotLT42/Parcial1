import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordsComponent } from './marathon/pages/records/records.component';
import { HomeComponent } from './public/pages/home/home.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { HeaderComponent } from './public/components/header/header.component';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
