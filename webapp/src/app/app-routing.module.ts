import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialListComponent } from './credential-list/credential-list.component';
import { CreateCredentialComponent } from './create-credential/create-credential.component';


const routes: Routes = [
  { path: '', redirectTo: 'credential', pathMatch: 'full' },
  { path: 'credentials', component: CredentialListComponent },
  { path: 'add', component: CreateCredentialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
