import { AuthState } from "../reducers/auth.reducer";
import { ProjectState } from "../reducers/projects.reducer";

export interface States {
  auth: AuthState;
  projects: ProjectState;
}
