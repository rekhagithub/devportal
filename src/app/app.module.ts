import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExploreAPIComponent } from './components/explore-api/explore-api.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import {LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

import sampleConfig from './app.config';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, sampleConfig.oidc);

import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'explore-api', component: ExploreAPIComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'docs', component: DocumentationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact-us', component: ContactusComponent},
  {path: 'analytics-page', component: AnalyticsPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExploreAPIComponent,
    HomeComponent,
    RegisterComponent,
    DocumentationComponent,
    LoginComponent,
    ContactusComponent,
    AnalyticsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
