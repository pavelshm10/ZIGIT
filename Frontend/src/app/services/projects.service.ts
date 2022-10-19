import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../types/project.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [];

  constructor(
    // private actions$: Actions,
    private httpClient: HttpClient // private toasterService: ToasterService, // private store: Store<AtState>
  ) {}

  getProjects() {
    return this.projects;
  }

  setProjects(projects: Project[]) {
    this.projects = projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  getProjectsApi() {
    return this.httpClient
      .get<Result>(`${environment.baseServerUrl}/projects`);
    // { responseType: 'text' })
    // .pipe(
    //   tap(
    //     // Log the result or error
    //     {
    //       next: (data) => console.log('projects ', data), //this.log(filename, data),
    //       error: (error) => console.log('err ', error), //this.logError(filename, error)
    //     }
    //   )
    // );
    // }
    
  }
}
