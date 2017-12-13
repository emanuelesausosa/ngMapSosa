import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAc5MqPT3OeyW2qETrN073Ifh60btjJkdo'
    })
  ],
  providers: [DataService],
  declarations: [ AppComponent, HomeComponent, ReportsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
