export interface Project {
  name: string;
  site_name: string;
  status: boolean;
  end_date: any;
  img_url: string;
  comment: string;
}

export interface ProjectState {
    projects: Project[];
  }
  