import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { TimelineHomeComponent } from './timeline-home/timeline-home.component';
import { AuthGuard } from './services/auth.guard';
import { RegistrationComponent } from './authentication/registration/registration.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'timeline', component:TimelineHomeComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
