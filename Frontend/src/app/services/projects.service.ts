import { Injectable } from '@angular/core';
import { Project } from '../types/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[]=[];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  setProjects(projects: Project[]){
    this.projects=projects;
  }

  addProject(project: Project){
    this.projects.push(project);
  }
}
