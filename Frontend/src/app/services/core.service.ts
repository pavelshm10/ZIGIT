import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private filter: string = '';
  constructor() {}

  setFilter(filter: string) {
    this.filter = filter;
  }

  getFilter() {
    return this.filter;
  }
}
