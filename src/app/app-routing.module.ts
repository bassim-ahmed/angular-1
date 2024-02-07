import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: MainComponent , title: 'Home'},
  { path: 'about', component: AboutComponent, pathMatch: 'full' ,title: 'About'},
  { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full' ,title: 'Portfolio'},
  { path: 'contact', component: ContactComponent, pathMatch: 'full',title: 'Contact'},
  { path: '**', component: NotfoundComponent ,title: 'Error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
