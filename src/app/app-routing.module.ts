import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineHomeComponent } from './timeline-home/timeline-home.component';


const routes: Routes = [
  {path:'', component:TimelineHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
