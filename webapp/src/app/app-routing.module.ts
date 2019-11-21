import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialListComponent } from './credential-list/credential-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'credential', pathMatch: 'full' },
  { path: 'credentials', component: CredentialListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
