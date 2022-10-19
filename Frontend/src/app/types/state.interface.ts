import { AuthState } from "../reducers/auth.reducer";
import { ProjectState } from "./project.interface";



export interface States {
  auth: AuthState;
  projects: ProjectState;
}
