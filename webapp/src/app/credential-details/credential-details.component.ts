import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialService } from '../credential.service';
import { Credential } from '../credential';

@Component({
  selector: 'app-credential-details',
  template: `
    <h2>Credential Details</h2>

    <hr/>
    <div *ngIf="credential">
      <div>
        <label><b>Name: </b></label> {{credential.name}}
      </div>
      <div>
        <label><b>Email: </b></label> {{credential.email}
      </div>
      <div>
        <label><b>Password: </b></label> {{credential.password}}
      </div>
    </div>

    <br>
    <br>
    <button (click)="list()" class="btn btn-primary">Back to Credential List</button><br>
  `,
  styles: []
})
export class CredentialDetailsComponent implements OnInit {

  id: number;
  credential: Credential;
  params = 'id';

  constructor(private route: ActivatedRoute, private router: Router, private credentialService: CredentialService) { }

  ngOnInit() {
    this.credential = new Credential();

    this.id = this.route.snapshot.params[this.params];

    this.credentialService.getCredential(this.id)
      .subscribe(data => {
        console.log(data);
        this.credential = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['credentials']);
  }

}
