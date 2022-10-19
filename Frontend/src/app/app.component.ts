import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Project } from './types/project.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {}
}
