import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'palindrome',
        component: PalindromeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
