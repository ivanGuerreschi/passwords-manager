import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../credential.service';
import { Credential } from '../credential';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-credential',
  template: `
    <h3>Update Credential</h3>
  <div [hidden]="submitted" style="width: 400px;">
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="credential.name" name="name">
      </div>

      <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" id="email" required [(ngModel)]="credential.email" name="email">
      </div>

      <div class="form-group">
        <label for="name">Password</label>
        <input type="text" class="form-control" id="password" required [(ngModel)]="credential.password" name="password">
      </div>

       <div class="form-group">
        <label for="name">Data</label>
        <input type="text" class="form-control" id="create" required [(ngModel)]="credential.create" name="create">
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
  `,
  styles: []
})
export class UpdateCredentialComponent implements OnInit {

  id: number;
  credential: Credential = new Credential();
  params = 'id';

  constructor(private route: ActivatedRoute, private credentialService: CredentialService, private router: Router) { }

  ngOnInit() {
    this.credential = new Credential();

    this.id = this.route.snapshot.params[this.params];

    this.credentialService.getCredential(this.id)
      .subscribe(data => {
        console.log(data);
        this.credential = data;
      }, error => console.log(error));
  }

  updateCredential() {
    this.credentialService.updateCredential(this.id, this.credential)
      .subscribe(data => console.log(data), error => console.log(error));
    this.credential = new Credential();
    this.gotoList();
  }

  onSubmit() {
    this.updateCredential();
  }

  gotoList() {
    this.router.navigate(['/Credentials']);
  }

}
