import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { DirectiveComponent } from './directive/directive.component';
import {HomeComponent} from './home/home.component';
import {BloglistComponent} from './bloglist/bloglist.component';
import { CustomDirective } from './directive/custom.directive';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CategoryPipe } from './pipes/category.pipe';
import { BlogformComponent } from './blogform/blogform.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BloginfoComponent } from './bloginfo/bloginfo.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenService} from './guards/token.service';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    DirectiveComponent,HomeComponent,
    BloglistComponent,CustomDirective, 
    CategoryPipe, BlogformComponent, BlogdetailComponent, PagenotfoundComponent, BloginfoComponent, BlogeditComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
