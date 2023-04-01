import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SecondePageComponent } from './seconde-page/seconde-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'seconde', component: SecondePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
