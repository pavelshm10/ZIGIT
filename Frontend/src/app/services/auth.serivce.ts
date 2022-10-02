import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
// import {TOKEN_NAME} from '@athena/shared/constants/config.constant';
// import {AtState} from '@athena/shared/types/state.interface';
// import {User} from '@athena/shared/types/user.interface';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any;//User;

  constructor(private router: Router, private store: Store) {
    // this.store.select('auth', 'currentUser').subscribe((currentUser) => {
    //   this.currentUser = currentUser;
    // });
  }

  getCurrentUserId() {
    return this.currentUser?.id;
  }

//   isUserLoggedIn(): boolean {
//     // return !!this.getAuthToken() && !!this.getCurrentUserId();
//   }

  setAuthToken(token: string) {
    if (token) {
    //   localStorage.setItem(TOKEN_NAME, token);
    } else {
    //   localStorage.removeItem(TOKEN_NAME);
    }
  }

  /**
   * Now it is only one way how to get correct current user id.
   */
//   getAuthToken(): string {
//     return localStorage.getItem(TOKEN_NAME);
//   }

  clearAuthDataAndGoToLogin() {
    // localStorage.removeItem(TOKEN_NAME);
    this.router.navigateByUrl('login');
  }

  logoutWithSavingIntent() {
    // if (this.getAuthToken() && window.location.pathname !== '/404') {
    //   sessionStorage.setItem('intent-url', window.location.pathname + window.location.search);
    // }
    // this.clearAuthDataAndGoToLogin();
  }
}
