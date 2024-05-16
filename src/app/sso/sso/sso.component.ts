import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css'],
})
export class SsoComponent {
  userAccounts: AccountInfo[] | null = null;

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.userAccounts = await this.authService.getUserAccounts();
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
