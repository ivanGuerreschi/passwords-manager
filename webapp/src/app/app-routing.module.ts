import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialListComponent } from './credential-list/credential-list.component';
import { CreateCredentialComponent } from './create-credential/create-credential.component';
import { CredentialDetailsComponent } from './credential-details/credential-details.component';
import { UpdateCredentialComponent } from './update-credential/update-credential.component';


const routes: Routes = [
  { path: '', redirectTo: 'credential', pathMatch: 'full' },
  { path: 'credentials', component: CredentialListComponent },
  { path: 'add', component: CreateCredentialComponent },
  { path: 'update/:id', component: UpdateCredentialComponent },
  { path: 'details/:id', component: CredentialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
