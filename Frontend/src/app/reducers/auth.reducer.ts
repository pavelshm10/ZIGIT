import { AuthActions, AuthActionTypes } from "../actions/auth.actions";
import { User } from "../types/user.interface";

export interface AuthState {
  currentUser: User | null;
}

export const initialState: AuthState = {
  currentUser: null,
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        currentUser: {
          id: action.payload?.id,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          adminUserPages: action.payload?.adminUserPages,
        },
      };
    case AuthActionTypes.UpdateCurrentUser:
      return {
        ...state,
        currentUser: {
          id: action.payload?.id,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          adminUserPages: action.payload?.adminUserPages,
        },
      };
    default:
      return state;
  }
}