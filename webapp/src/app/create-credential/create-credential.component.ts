import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';
import { CredentialService } from '../credential.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-credential',
  template: `
      <h3>Create Credential</h3>
  <div [hidden]="submitted" style="width: 400px;">
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="credential.name" name="name">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" required [(ngModel)]="credential.email" name="email">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password" required [(ngModel)]="credential.password" name="password">
      </div>

       <div class="form-group">
        <label for="create">Data</label>
        <input type="text" class="form-control" id="create" required [(ngModel)]="credential.create" name="create">
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>

  <div [hidden]="!submitted">
    <h4>You submitted successfully!</h4>
    <!-- <button class="btn btn-success" (click)="newEmployee()">Add</button> -->
  </div>
  `,
  styles: []
})
export class CreateCredentialComponent implements OnInit {

  credential: Credential = new Credential();
  submitted = false;

  constructor(private credentialService: CredentialService, private router: Router) { }

  ngOnInit() {
  }

  newCredential(): void {
    this.submitted = false;
    this.credential = new Credential();
  }

  save() {
    this.credentialService.createCredential(this.credential)
      .subscribe(data => console.log(data), error => console.log(error));
    this.credential = new Credential();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/credentials']);
  }

}
