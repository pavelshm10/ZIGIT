import { Action } from '@ngrx/store';

export enum ProjectActionTypes {
  GetProjects = '[Projects Component] GetProjects',
  GetProjectsSuccess = '[Projects Component] GetProjectsSuccess',
  GetProjectsFailure = '[Projects Component] GetProjectsFailure',
  AddProject = '[Projects Component] AddProjects',
  AddProjectSuccess = '[Projects Component] AddProjectSuccess',
  AddProjectFailure = '[Projects Component] AddProjectFailure',
}

export class GetProjects implements Action {
  readonly type = ProjectActionTypes.GetProjects;
}

export class GetProjectsSuccess implements Action {
  readonly type = ProjectActionTypes.GetProjectsSuccess;
  constructor(
    public payload: {
      name: string;
      site_name: string;
      status: boolean;
      end_date: Date;
      img_url: string;
      comment: string;
    }[]
  ) {}
}

export class GetProjectsFailure implements Action {
  readonly type = ProjectActionTypes.GetProjectsFailure;
  constructor() {}
}

export class AddProject implements Action {
  readonly type = ProjectActionTypes.AddProject;
  constructor(public payload: any) {}
}

export class AddProjectSuccess implements Action {
  readonly type = ProjectActionTypes.AddProjectSuccess;
  constructor() {}
}

export class AddProjectFailure implements Action {
  readonly type = ProjectActionTypes.AddProjectFailure;
  constructor() {}
}

export type ProjectsActions =
  | GetProjects
  | GetProjectsSuccess
  | GetProjectsFailure
  | AddProject
  | AddProjectSuccess
  | AddProjectFailure;
