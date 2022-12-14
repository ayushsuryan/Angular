import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";


const routes: Routes = [
  {
    path: '', component : WelcomeComponent
  },
  {
   path:'auth', loadChildren: () => import('../app/auth/auth.module').then(module => module.AuthModule),
  },
  {
   path:'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(module => module.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
