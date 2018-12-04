import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlNotFoundComponent } from './url-not-found/url-not-found.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:'', redirectTo:'search', pathMatch: 'full' },
  { path:'search', component: SearchComponent, pathMatch: 'full' },
  { path:'about', component: AboutComponent, pathMatch: 'full' },
  { path:'**', component: UrlNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
