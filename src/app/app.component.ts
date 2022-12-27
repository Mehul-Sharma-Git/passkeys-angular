import { Component } from '@angular/core';
import { AuthService, User } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'passkeys-app-angular';
  user: User = {
    id: '',
    name: '',
    displayName: '',
  };
  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      this.user = this.authService.userData;
    });
  }
  async ngOnInit(): Promise<void> {
    // get user data when component loads
    this.user = await this.authService.userInfo();
    console.log({ user: this.user });
  }
  
}