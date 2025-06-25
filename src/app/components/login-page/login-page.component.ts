import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  showPassword = false;
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  loginWithGoogle(): void {
  window.location.href = 'https://localhost:7182/auth/google-login';
}

}
