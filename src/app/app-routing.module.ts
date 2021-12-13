import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservabeComponent } from './observabe/observabe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromiseComponent } from './promise/promise.component';
import {ParentComponent} from './parent/parent.component';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservabeComponent },  
  { path: 'parent', component: ParentComponent },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
