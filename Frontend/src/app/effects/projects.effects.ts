import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  AddProject,
  AddProjectFailure,
  AddProjectSuccess,
  GetProjects,
  GetProjectsFailure,
  GetProjectsSuccess,
  ProjectActionTypes,
} from '../actions/projects.actions';
import { CoreService } from '../services/core.service';
import { ToasterService } from '../services/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectEffects {
  @Effect()
  getProjects$ = this.actions$.pipe(
    ofType(ProjectActionTypes.GetProjects),
    switchMap(() => {
      return this.httpClient
        .get(`${environment.baseServerUrl}/projects`)
        .pipe(
          map((response) => {
            return new GetProjectsSuccess(
              response as {
                name: string;
                site_name: string;
                status: boolean;
                end_date: Date;
                img_url: string;
                comment: string;
              }[]
            );
          }),
          catchError(() => of(new GetProjectsFailure()))
        );
    })
  );

  @Effect()
  addProject$ = this.actions$.pipe(
    ofType(ProjectActionTypes.AddProject),
    map((action) => (action as AddProject).payload),
    switchMap((payload) => {
      let data = [];
      if (!payload.length) {
        data.push(payload);
      } else data = payload;
      return this.httpClient
        .post(`${environment.baseServerUrl}/add-project`, {
          data,
          actionSource: 2,
        })
        .pipe(
          map((response) => {
            this.toasterService.success({
              content: 'New project was added successfully',
            });
            this.store.dispatch(new GetProjects());
            return new AddProjectSuccess();
          }),
          catchError(() => of(new AddProjectFailure()))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store,
    private toasterService: ToasterService,
    private coreService: CoreService
  ) {}
}
