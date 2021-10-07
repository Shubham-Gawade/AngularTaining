import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirective } from './custom.directive';
import { PipeCompComponent } from './pipe-comp/pipe-comp.component';
import { CustomPipe } from './custom.pipe';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmphttpcompComponent } from './emphttpcomp/emphttpcomp.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingdemoComponent } from './routingdemo/routingdemo.component';
import { EmailusComponent } from './emailus/emailus.component';
import { CallusComponent } from './callus/callus.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    DatabindingComponent,
    LoginFormComponent,
    DirectivesComponent,
    CustomDirective,
    PipeCompComponent,
    CustomPipe,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    EmpListComponent,
    EmphttpcompComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    RoutingdemoComponent,
    EmailusComponent,
    CallusComponent,
    TemplatedrivenformComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
