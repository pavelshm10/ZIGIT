import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Project } from 'src/app/types/project.interface';

const getProjects = createFeatureSelector<Project[]>('projects');

export const projects = createSelector(getProjects, (p) => p);
