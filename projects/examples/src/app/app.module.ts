import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMultiselectModule } from '../../../ngx-multiselect/src/lib/ngx-multiselect.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMultiselectModule, HttpClientModule],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
