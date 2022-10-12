import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Project } from './types/project.interface';

const ELEMENT_DATA: Project[] = [
  {
    name: 'proj-1',
    site_name: 'site-1',
    status: true,
    end_date: new Date(88, 6, 1),
    img_url: 'assets/images/proj_1.jpg',
    comment: 'comment-1',
  },
  {
    name: 'proj-2',
    site_name: 'site-2',
    status: true,
    end_date: new Date(88, 6, 2),
    img_url: 'assets/images/proj_2.jpg',
    comment: 'comment-2',
  },
  {
    name: 'proj-3',
    site_name: 'site-3',
    status: true,
    end_date: new Date(88, 6, 3),
    img_url: 'assets/images/proj_3.jpg',
    comment: 'comment-3',
  },
  {
    name: 'proj-4',
    site_name: 'site-4',
    status: false,
    end_date: new Date(88, 6, 4),
    img_url: 'assets/images/proj_4.jpg',
    comment: 'comment-4',
  },
  {
    name: 'proj-5',
    site_name: 'site-5',
    status: true,
    end_date: new Date(2022, 10, 10),
    img_url: 'assets/images/proj_5.jpg',
    comment: 'comment-5',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Frontend';
  formatData: any = [];
  constructor(private projectService: ProjectsService) {}
  ngOnInit(): void {
    ELEMENT_DATA.map((item) => {
      const project = {
        name: item.name,
        site_name: item.site_name,
        status: item.status,
        img_url: item.img_url,
        comment: item.comment,
        end_date: this.formatDate(item.end_date),
        red_flag: item.end_date < new Date() && item.status ? true : false,
      };
      this.formatData.push(project);
    });
    this.projectService.setProjects(this.formatData);
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
}
