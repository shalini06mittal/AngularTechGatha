import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogformComponent } from './blogform/blogform.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BloginfoComponent } from './bloginfo/bloginfo.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', redirectTo:'blogs-list',pathMatch:'full'
  },
  {
    path:'create', component: BlogformComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit', component: BlogeditComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'blogs-list', component: BloglistComponent
  },
  {
    path:'blogs-list/:id', component: BlogdetailComponent,
    children:[
      {
        path:'info',component:BloginfoComponent
      }
    ]
  },
  {
    path:'**', component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
