import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // this to import app-routing.module.ts and this file import RouterModule and exporting it to her (because I import it in this file) and RouterModule has all properties of router like (<router-outlet>, <routerlink>) so I not import this properties her
    HttpClientModule, // this because I need to impoort httpClient in services (note: services providedIn: 'root' so I can use it any where and it see this import whatever where is it)
    CoreModule,       // I import this module to use nav-bar because nav-bar in core module
    // ShopModule,    // I import it in app-routing for lazy loading
    HomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: errorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
