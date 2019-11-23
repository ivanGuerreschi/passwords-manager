import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialListComponent } from './credential-list/credential-list.component';
import { CreateCredentialComponent } from './create-credential/create-credential.component';
import { CredentialDetailsComponent } from './credential-details/credential-details.component';
import { UpdateCredentialComponent } from './update-credential/update-credential.component';

@NgModule({
  declarations: [
    AppComponent,
    CredentialListComponent,
    CreateCredentialComponent,
    CredentialDetailsComponent,
    UpdateCredentialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
