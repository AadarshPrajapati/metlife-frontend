import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';   // ✅ add this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// standalone components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent],  // ✅ AppComponent is NOT standalone, so declare here
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,        // ✅ required for <router-outlet>
    AppRoutingModule,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
