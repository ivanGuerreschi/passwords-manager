import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialService } from '../credential.service';
import { Credential } from '../credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential-list',
  template: `
    <div class="panel panel-primary">
  <div class="panel-heading">
    <h2>Credential List</h2>
  </div>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Create</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let credential of credentials | async">
          <td>{{credential.id}}</td>
          <td>{{credential.name}}</td>
          <td>{{credential.email}}</td>
          <td>{{credential.password}}</td>
          <td>{{credential.create}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: []
})
export class CredentialListComponent implements OnInit {

  credentials: Observable<Credential[]>;

  constructor(private credentialService: CredentialService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.credentials = this.credentialService.getCredentialsList();
  }

}
