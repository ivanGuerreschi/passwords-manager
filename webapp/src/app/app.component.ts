import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
          <a routerLink="credentials" class="nav-link" routerLinkActive="active">Credential List</a>
      </li>
      <li class="nav-item">
          <a routerLink="add" class="nav-link" routerLinkActive="active">Add Credential</a>
      </li>
	  <li class="nav-item">
          <a routerLink="" class="nav-link" (click)="refresh()">Refresh</a>
      </li>
    </ul>
  </nav>
  <div class="container">
    <br>
    <h2 style="text-align: center;">{{title}}</h2>
    <hr>
    <div class="card">
      <div class="card-body">
    <router-outlet></router-outlet>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="container">
        <span>All Rights Reserved 2019 @Ivan Guerreschi</span>
    </div>
  </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Passwords Manager';
  
  refresh(): void {
    window.location.reload();
}
}
