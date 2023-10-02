import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { RecordsComponent } from './marathon/pages/records/records.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'marathon/records', component: RecordsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'page-not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
