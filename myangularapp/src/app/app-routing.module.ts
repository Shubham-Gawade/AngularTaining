import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CallusComponent } from './callus/callus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmailusComponent } from './emailus/emailus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path : "home", component : HomeComponent},
  {path : "aboutus", component : AboutusComponent},
  {path : "contactus", component : ContactusComponent, children : [
    {path:"emailus", component : EmailusComponent},
    {path:"callus", component : CallusComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
