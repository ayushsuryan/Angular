import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path: '', redirectTo: 'main/home', pathMatch:'full' },
  {path: 'main', redirectTo: 'main/home', pathMatch:'full' },
  {path: 'main', component:DashboardComponent, children:[
    {path: 'home', component:HomeComponent},
    {path: 'ticket', component:TicketComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
