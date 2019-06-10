import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponent1 } from './basics/app.component.1';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectiveComponent } from './directive/directive.component';
import {HomeComponent} from './home/home.component';
import {BloglistComponent} from './bloglist/bloglist.component';
import { CustomDirective } from './directive/custom.directive';
import { PipesComponent } from './pipes/pipes.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { GrowthPipe } from './pipes/growth.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { BlogformComponent } from './blogform/blogform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ParentComponent } from './service/parent/parent.component';
import { ChildComponent } from './service/child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,AppComponent1,
    BlogComponent,
    InputoutputComponent,
    LifecycleComponent,
    DirectiveComponent,HomeComponent,
    BloglistComponent,CustomDirective, PipesComponent, GrowthPipe, CategoryPipe, BlogformComponent, ReactiveComponent, ParentComponent, ChildComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
