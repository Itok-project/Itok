import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HeaderComponent } from './header/header.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
import {ProfileComponent } from './profile/profile.component';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
const appRoutes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  // {path: 'home', component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    CarouselModule,
    AppRoutingModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
