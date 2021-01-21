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
import {HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
import { NewComponent } from './new/new.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';


const appRoutes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'new', component: NewComponent}
  // {path: 'home', component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
