import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { environment } from 'src/environments/environment';
import { ToasterService } from '../services/toaster.service';
import { AuthService } from '../services/auth.serivce';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action) => (action as Login).payload),
    switchMap((payload) => {
      const email = payload.email;

      return this.httpClient.get(`${environment.baseServerUrl}/login?`).pipe(
        map(
          (response: any) => {
            if (response.error) {
              return new LoginFailure(response.error);
            }
            try {
              // this.authService.setAuthToken(response.token);
              // this.pagesService.setAdminUserPages(response.data.adminUserPages);
              // this.router.navigateByUrl(
                // sessionStorage.getItem('intent-url') ||
                  // this.pagesService.getHomePagePath(
                    // response.data.adminUserPages
                  // )
              // );
              sessionStorage.removeItem('intent-url');
              // this.coreService.onboardingStep();
            } catch (error) {
              if (!environment.production) {
                // eslint-disable-next-line no-console
                console.error(error);
              }
            }
            return new LoginSuccess(response.data);
          }
        ),
        catchError((error: Error) => of(new LoginFailure(error)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
    private toasterService: ToasterService,
    // private pagesService: PagesService,
    // private coreService: CoreService
  ) {}
}
