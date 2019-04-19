import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GithubComponent } from './pages/github/github.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: "github", component: GithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
