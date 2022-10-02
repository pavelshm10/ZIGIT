import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  UpdateCurrentUser = '[Auth] UpdateCurrentUser',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: {email: string; password: string}) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(
    public payload: {
      id: string;
      firstName: string;
      lastName: string;
      adminUserPages: {
        id: number;
        name: string;
        path: string;
      }[];
    },
  ) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: {}) {}
}

export class UpdateCurrentUser implements Action {
  readonly type = AuthActionTypes.UpdateCurrentUser;
  constructor(
    public payload: {
      id: string;
      firstName: string;
      lastName: string;
      adminUserPages: {
        id: number;
        name: string;
        path: string;
      }[];
    },
  ) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | UpdateCurrentUser;
