import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/types/project.interface';
// import * as selectors from '../selectors/prijects.selector';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  // $projects: Observable<Project[]>;
  displayedColumns: string[] = [
    'flag',
    'name',
    'site_name',
    'status',
    'end_date',
    'img_url',
    'comment',
  ];
  dataSource: any = new MatTableDataSource();
  private unsubscribe$ = new Subject();
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private store: Store,
    private projectService: ProjectsService 
  ) {
    this.updateData();
  }

  ngOnInit(): void {
    this.updateData();
    // this.store
    //   .select('projects','projects')
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((projects) => {
    //     // this.dataSource = projects;
    //     // this.updateTableData();
    //   });
  }

  updateData() {
    this.dataSource = this.projectService.getProjects();
  }

  addProject() {
    this.router.navigate(['/add-project']);
  }
}
