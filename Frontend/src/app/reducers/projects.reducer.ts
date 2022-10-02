import { createReducer, on } from '@ngrx/store';
import {
  ProjectActionTypes,
  ProjectsActions,
} from '../actions/projects.actions';
import { Project } from '../types/project.interface';
// import { increment, decrement, reset } from './counter.action';

export interface ProjectState {
  projects: Project[];
}

export const initialState: ProjectState = {
  projects: [],
};

export function projectsReducer(
  state = initialState,
  action: ProjectsActions
): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.GetProjectsSuccess:
      return {
        ...state,
        projects: action.payload?.map(
          ({ name, site_name, status, end_date, img_url, comment }) => ({
            name,
            site_name,
            status,
            end_date,
            img_url,
            comment,
          })
        ),
      };
    default:
      return state;
  }
}
