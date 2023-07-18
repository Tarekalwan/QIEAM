import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../Services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const isAuthenticated = this.authentificationService.login(
      this.username,
      this.password
    );

    if (isAuthenticated) {
      this.router.navigate(['/library']);
    } else {
      console.log('Erreur d\'authentification');
    }
  }

  ngOnInit(): void {}
}
