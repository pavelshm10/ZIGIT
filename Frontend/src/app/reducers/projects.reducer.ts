import { Action, createReducer, on } from '@ngrx/store';
import {
  ProjectActionTypes,
  ProjectsActions,
} from '../actions/projects.actions';
import { Project, ProjectState } from '../types/project.interface';

export const initialState: ProjectState = {
  projects: [],
};

export function projectsReducer(state = initialState, action: ProjectsActions) {
  switch (action.type) {
    case ProjectActionTypes.GetProjectsSuccess:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
