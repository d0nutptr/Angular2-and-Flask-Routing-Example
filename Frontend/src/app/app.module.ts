import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'detail/:service', component: DetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    DetailComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }