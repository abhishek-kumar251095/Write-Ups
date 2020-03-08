import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalMainComponent } from './journal-main/journal-main.component';
import { EntryAddComponent } from './journal-main/entry-add/entry-add.component';
import { EntriesComponent } from './journal-main/entries/entries.component';
import { EntryDisplayComponent } from './journal-main/entry-display/entry-display.component';


const routes: Routes = [
  {path:'journal', component:JournalMainComponent},
  {path:'journal/add', component: EntryAddComponent},
  {path:'journal/display', component:EntriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
