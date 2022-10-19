import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GetProjects } from 'src/app/actions/projects.actions';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/types/project.interface';
import { Result } from 'src/app/types/response.interface';
import { States } from 'src/app/types/state.interface';
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
    private store: Store<States>,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.getDataWithService();
    this.getDataWithNgrx();
  
    // this.getData();
    // this.store
    //   .select('projects','projects')
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((projects) => {
    //     // this.dataSource = projects;
    //     // this.updateTableData();
    //   });
  }

  getDataWithNgrx(){
    this.store.dispatch(new GetProjects());
    this.store
    .select('projects')
    .pipe(
      takeUntil(this.unsubscribe$),
    )
    .subscribe((data: any) => {
      console.log("proj ",data?.projects?.result?.projects);
      if(data){
        this.dataSource=data?.projects?.result?.projects;
      }
    });
  }

  async getDataWithService() {
    this.projectService.getProjectsApi().subscribe((projects: Result) => {
      console.log("test ",projects.result.projects);
      this.dataSource=projects.result.projects;
    });
  }

  formatDate(date: Date) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join('-');
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  addProject() {
    this.router.navigate(['/add-project']);
  }
}
