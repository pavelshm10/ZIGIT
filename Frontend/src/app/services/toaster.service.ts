import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToasterComponent } from '../components/toaster/toaster.component';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private snackBar: MatSnackBar) {}

  public success({content}: {content: string}) {
    this.show({type: 'success', content});
  }

  public error({content}: {content: string}) {
    this.show({type: 'error', content});
  }

  public warning({content}: {content: string}) {
    this.show({type: 'warning', content});
  }

  private show({type, content}: {type: 'success' | 'error' | 'warning'; content: string}) {
    this.snackBar.openFromComponent(ToasterComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      data: {
        type,
        content,
      },
    });
  }
}
