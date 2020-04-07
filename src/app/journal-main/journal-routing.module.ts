import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalMainComponent } from '../journal-main/journal-main.component';
import { EntryAddComponent } from '../journal-main/entry-add/entry-add.component';
import { EntriesComponent } from '../journal-main/entries/entries.component';
import { EntryDisplayComponent } from '../journal-main/entry-display/entry-display.component';

import { AuthGuard } from '../services/auth.guard';


const routes: Routes = [
    {path:'journal', component:JournalMainComponent, canActivate:[AuthGuard]},
    {path:'journal/add', component: EntryAddComponent, canActivate:[AuthGuard]},
    {path: 'journal/edit/:id', component: EntryAddComponent, canActivate:[AuthGuard]},
    {path:'journal/display', component:EntriesComponent, canActivate:[AuthGuard]},
    {path:'journal/:id', component:EntryDisplayComponent, canActivate:[AuthGuard]}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class JournalRoutingModule { } 